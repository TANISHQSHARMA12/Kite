const path = require("path");
// 💡 FIX: Force dotenv to look exactly one folder up from this file's location
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  console.log("SecretToken.js check - TOKEN_KEY:", process.env.TOKEN_KEY);

  if (!process.env.TOKEN_KEY) {
    throw new Error("TOKEN_KEY is missing in environment variables");
  }

  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60, // 3 days
  });
};