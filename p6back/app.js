const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/user');
const saucesRoutes = require('./routes/sauces.js');
const path = require('path');
const fs = require('fs');
const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://alluser:projet6ocdw2020@clusteroc-t8ue9.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use("/api/coucou",(req,res,next)=>{
  res.status(200).json({message:"A que COUCOU !!"});
});

app.use('/api/auth', usersRoutes);
app.use('/api', saucesRoutes);


module.exports = app;