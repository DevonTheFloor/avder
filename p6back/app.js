const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const saucesRoutes = require('./routes/sauces');
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

app.use('/api/auth/signup', usersRoutes);
app.use('/api/auth/login', usersRoutes);
app.post('api/sauces/', saucesRoutes);
app.get('/api/sauces/', saucesRoutes);

module.exports = app;