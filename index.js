const express = require('express');
const app = express();

require('dotenv').config();
const connect = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const companyRoutes = require("./routes/companyRoutes")
const startupRoutes = require("./routes/startupRoutes")
const postRoutes = require("./routes/postRoutes")

const path = require("path");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


var cors = require('cors');
const corsOptions = {
  origin: "*",
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}



const PORT = 4000;

connect();

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

const server = app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
  })
  
app.use("/", userRoutes);
app.use("/", companyRoutes);
app.use("/", startupRoutes);
app.use("/", postRoutes);