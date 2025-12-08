const express = require('express');
const morgan = require("morgan");

const mongoose = require('mongoose');
const methodOverride = require("method-override");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

const mongoDBConnectionString = process.env.MONGODBKEY;

mongoose.connect(mongoDBConnectionString);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
})

const Planet = require('./models/planet.js');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method")); // new
app.use(morgan("dev")); //new
app.use(express.static('public'));

//main().catch(err => console.log(err));

app.get('/planets', async (req, res) => {
  // without arguments -> retrieves all -> array
  const allPlanets = await Planet.find();
  res.render('planets/index.ejs', {planets: allPlanets})//can file name be omitted for index?
});

app.get('/planets/new', (req, res) => {
  // Express.js -> automatically -> looks for /views in the root directory
  res.render('planets/new.ejs')
  //views/planets/new.ejs
});

app.post('/planets', async (req, res) => {
  console.log(req.body)
  // Convert checkbox values to booleans
  req.body.hasRings = req.body.hasRings === 'true';
  req.body.isFavorite = req.body.isFavorite === 'true';
  //creates planet
  await Planet.create(req.body);
  //redirects to index page after creating a planet
  res.redirect('/planets')
})

app.get('/planets/:planetId/edit', async (req, res) => {
  const planet = await Planet.findById(req.params.planetId);
  res.render('planets/edit.ejs', { planet });
});

app.get('/planets/:planetId', async (req, res) => {
  const planetId = req.params.planetId;
  const planetFound = await Planet.findById(planetId);

  res.render("planets/show.ejs", {planet: planetFound});
});

app.put('/planets/:planetId', async (req, res) => {
  // Convert checkbox values to booleans
  req.body.hasRings = req.body.hasRings === 'true';
  req.body.isFavorite = req.body.isFavorite === 'true';
  await Planet.findByIdAndUpdate(req.params.planetId, req.body);
  res.redirect(`/planets/${req.params.planetId}`);
});

app.delete("/planets/:planetId", async (req, res) => {
  await Planet.findByIdAndDelete(req.params.planetId);
  res.redirect('/planets');
});

app.listen(port, () => {
  console.log(`ExpressJS Server Running on http://localhost:${port}`);
})
