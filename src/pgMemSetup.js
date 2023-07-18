// set up pg-mem, which is an in memory version of postgres. This exists so that students don't have to get a postgres db setup just to learn about Express.js
// you shouldn't need to update this file. 

const { newDb } = require('pg-mem');

const db = newDb();

db.public.none('CREATE TABLE animals (id SERIAL NOT NULL, name text NOT NULL, photo text NOT NULL, cuteness_rating int NOT NULL);');
db.public.none('CREATE TABLE plants (id SERIAL NOT NULL, name text NOT NULL, photo text NOT NULL, cuteness_rating int NOT NULL);');
db.public.none('CREATE TABLE houses (id SERIAL NOT NULL, name text NOT NULL, photo text NOT NULL, cuteness_rating int NOT NULL);');

db.public.none('INSERT INTO animals (name, photo, cuteness_rating) VALUES (\'Squinting Saint Puppy\', \'https://images.pexels.com/photos/69372/pexels-photo-69372.jpeg\', \'10\');');
db.public.none('INSERT INTO animals (name, photo, cuteness_rating) VALUES (\'Basket of Orange Kittens\', \'https://images.pexels.com/photos/14215163/pexels-photo-14215163.jpeg\', \'10\');');
db.public.none('INSERT INTO animals (name, photo, cuteness_rating) VALUES (\'Uncertain Lamb\', \'https://images.pexels.com/photos/5490714/pexels-photo-5490714.jpeg\', \'10\');');

db.public.none('INSERT INTO plants (name, photo, cuteness_rating) VALUES (\'Smiling Vine\', \'https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg\', \'9\');');
db.public.none('INSERT INTO plants (name, photo, cuteness_rating) VALUES (\'Topiary\', \'https://images.pexels.com/photos/581305/pexels-photo-581305.jpeg\', \'10\');');
db.public.none('INSERT INTO plants (name, photo, cuteness_rating) VALUES (\'Pothos\', \'https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg\', \'8\');');

db.public.none('INSERT INTO houses (name, photo, cuteness_rating) VALUES (\'Cute House\', \'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg\', \'8\');');
db.public.none('INSERT INTO houses (name, photo, cuteness_rating) VALUES (\'A Frame\', \'https://images.pexels.com/photos/4992384/pexels-photo-4992384.jpeg\', \'9\');');
db.public.none('INSERT INTO houses (name, photo, cuteness_rating) VALUES (\'A Frame\', \'https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg\', \'8\');');


module.exports = {
  db,
};