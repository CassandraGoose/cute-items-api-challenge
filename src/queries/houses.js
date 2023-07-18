// you shouldn't need to update this file, but you may need to use the methods.
const { db } = require('../pgMemSetup');

const getCuteHouses = async () => {
  return await db.public.many('SELECT * FROM houses;');
}

module.exports = {
  getCuteHouses,
}
