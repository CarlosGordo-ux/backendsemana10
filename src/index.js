const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGOOSE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(routes)

app.listen(process.env.PORT ||3333);
