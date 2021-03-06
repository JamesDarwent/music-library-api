const express = require('express');
const artistControllers = require('./controllers/artists');


const app = express();

app.use(express.json());



app.post('/artists', artistControllers.create);
app.get('/artists', artistControllers.list);
app.get('/artists/:artistId', artistControllers.getArtistById);
app.patch('/artists/:artistId', artistControllers.update);
app.delete('/artists/:artistId', artistControllers.delete);











module.exports = app;


