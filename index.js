const express= require('express')
const app =express()
const bodyParser = require("body-parser");
const hbs = require("express-handlebars")
const path= require("path")
const PORT= 4001|| process.env.PORT
const router = require('./routes/router')
const db =require('./config/connection')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs',hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layout/',partialsDir:__dirname+'/views/partials'}))
app.use(express.static(path.join(__dirname, 'public')));

  app.use(express.json());
  app.use("/", router);
  db.connect((err)=>{
    if (err)
    console.log("Connection error"+err)
    else
   console.log("Database connected");
  })
  app.listen(PORT,()=>{
      console.log(`server started on port: ${PORT}`);
  })