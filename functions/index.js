const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KYnK1SB7X1EsYjH0DRu4v2PaEFRWgFCGLKEzigiLsXgNqN7at3zLaRoguiUsokd1JevrBVwVeIRruvIe2b57jTp00xjqrvNKi"
);

//API

//App config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received !! for amount ->", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });

  //Okey
  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
//Example endpoint
// http://localhost:5001/clone-2161b/us-central1/api
