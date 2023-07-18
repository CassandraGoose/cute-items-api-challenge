const express = require('express');
const { getCutePlants, getCutePlantsSorted } = require('../queries/plants');
const router = express.Router();

router.get('/', async (req, res, next) => {
  let plants;
  try {
    plants = await getCutePlants();
  } catch(e) {
    return next(e);
  }
  return res.json(plants);
});

module.exports = router;
