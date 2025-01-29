const express = require('express');
const { resolve } = require('path');
const mongoose= require('mongoose')
const dotenv= require('dotenv')
dotenv.config()
const app = express();

const port = 3010;
const mongoURL=process.env.url

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send("Home page")
});

app.listen(port, async() => {
  try{
    await mongoose.connect(mongoURL)
    console.log("Connected to database")
  }catch(error){
    console.log("Error connecting to database:",error)
  }
  console.log(`Example app listening at http://localhost:${port}`);
});
