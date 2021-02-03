const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://danilopaulinodasilva:KuuUw5A4Jo8ykMIb@cluster0.cu8ew.mongodb.net/omnistack-twitter?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(require('./routes'));

app.listen(3000, () => {
    console.log("Server started at port 3000");  
});
