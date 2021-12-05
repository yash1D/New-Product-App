const path=require("path")

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const admin1 = require('./routes/admin.js');

const shop1 = require('./routes/shop.js');

const login = require('./routes/log-in.js')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

  app.use('/admin',admin1);
  app.use('/log-in',login);

  app.use(shop1);

  app.use((req, res, next) => {
      res.status(404).sendFile(path.join(__dirname,'views',error.html));
    });


app.listen(3000);
