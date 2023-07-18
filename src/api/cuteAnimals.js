const express = require('express');
const { getCuteAnimals } = require('../queries/animals');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let animals = await getCuteAnimals();
    return res.json(animals);
  } catch(e) {
    return next(e);
  }
});

module.exports = router;
