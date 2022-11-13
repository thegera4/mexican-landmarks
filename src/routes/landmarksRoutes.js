const { Router } = require("express");
const { getLandmarks, getByCity } = require("../controllers/Landmark.js");
const { Landmark } = require("../db.js");

const router = Router();

router.get("/", (req, res) => {
  res.send('Welcome to the Mexican Landmarks API!');
});

router.get("/landmarks", (req, res) => {
  getLandmarks()
    .then((landmarks) => {
      res.status(200).send(landmarks);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.get("/landmarks/city/:city", (req, res) => {
  const { city } = req.params;
  Landmark.findAll({
    where: {
      city: city
    }
  })
  .then((landmarks) => {
    res.status(200).send(landmarks);
  })
  .catch((error) => {
    res.status(500).send(error);
  });
});

router.get("/landmarks/state/:state", (req, res) => {
  const { state } = req.params;
  Landmark.findAll({
    where: {
      state: state
    }
  })
  .then((landmarks) => {
    res.status(200).send(landmarks);
  })
  .catch((error) => {
    res.status(500).send(error);
  });
});

router.post("/landmarks/post", (req, res) => {
  const { name, city, state, coordinates, image, description } = req.body;
  Landmark.create({
    name,
    city,
    state,
    coordinates,
    image,
    description,
  })
    .then((landmark) => {
      res.status(201).send(landmark);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});


module.exports = router;