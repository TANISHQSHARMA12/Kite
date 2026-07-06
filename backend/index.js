require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();

const { holdingModels } = require("./models/holdingModels");
const { PositionModels } = require("./models/PositionModels");
const { OrdersModels } = require("./models/OrdersModels");

const authRoute = require("./Routes/AuthRoute");

const Port = process.env.Port || 3002;
const uri = process.env.MONGO_URL;

app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3000",
      "http://localhost:5173",
      "https://kite-4.onrender.com",
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHolding = await holdingModels.find({});
  res.json(allHolding);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModels.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModels({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order Saved");
});

app.listen(Port, () => {
  console.log("App Started");
  mongoose.connect(uri);
  console.log("DataBase Started");
});

