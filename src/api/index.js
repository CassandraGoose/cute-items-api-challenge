const express = require('express');

const cuteAnimals = require('./cuteAnimals');
const cutePlants = require('./cutePlants');

const router = express.Router();

router.use('/cute-amnal', cuteAnimals);
router.use('/cute-plants', cuteAnimals);

module.exports = router;
