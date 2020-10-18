require("dotenv").config();
const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
