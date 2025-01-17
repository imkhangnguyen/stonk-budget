const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://khangn:mernstack@cluster0.awwcy.mongodb.net/budget_data?retryWrites=true&w=majority'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection established");
});

const transactionsRouter = require("./routes/transactions");

app.use("/transactions", transactionsRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
