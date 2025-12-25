import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "./lib/auth.js";

const app = express();
const port = process.env.PORT || 3000;

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `
      <html>
        <head>
          <title>Express BetterAuth</title>
          <link rel="icon" type="image/x-icon" href="https://raw.githubusercontent.com/better-auth/better-auth/refs/heads/canary/demo/nextjs/public/favicon/favicon.ico">
        </head>
        <body style="background-color: #f0f0f0; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
          <h1> Welcome to the Express Server with BetterAuth demo!</h1>
          <a href="/api/auth/reference" style="color: white; background: black; padding: 10px; text-decoration: none;">OpenAPI</a>
        </body>
      </html>
    `,
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
