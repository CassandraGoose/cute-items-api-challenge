// you shouldn't need to update this file, but you may need to use the methods.
const { db } = require('../pgMemSetup');

const getCutePlants = async () => {
  return await db.public.many('SELECT * FROM plants;');
}

const getCutePlantsSorted = async (propertyToSortBy) => {
  return await db.public.many(`SELECT * FROM plants ORDER BY ${propertyToSortBy};`);
}

module.exports = {
  getCutePlants,
  getCutePlantsSorted,
}
