require("dotenv").config();

const express = require("express");
const app = express();
const request = require("request"); // todo: update to https://github.com/mikeal/bent
const cors = require("cors");
// const qs = require("querystring");
// const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});