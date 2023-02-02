
require("dotenv").config();
const express = require("express")
const app = express();
require("./db/conn")
const users = require("./model/userSchema")
const mongoose = require("mongoose")
const router = require('./routers/router')
const cors = require('cors')
const port = 8002;


app.use(express.json());
app.use(cors());

app.use(router)



app.listen(port, () => {
    console.log("server Start")
})
