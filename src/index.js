require('dotenv').config({ path: '.env'});

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log("Server started at port 3000");  
});
