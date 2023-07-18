// you shouldn't need to update this file. 
const request = require('supertest');

const app = require('../src/app');

const cutePuppyData = [{"name":"Squinting Saint Puppy","photo":"https://images.pexels.com/photos/69372/pexels-photo-69372.jpeg","cuteness_rating":10,"id":1},{"name":"Basket of Orange Kittens","photo":"https://images.pexels.com/photos/14215163/pexels-photo-14215163.jpeg","cuteness_rating":10,"id":2},{"name":"Uncertain Lamb","photo":"https://images.pexels.com/photos/5490714/pexels-photo-5490714.jpeg","cuteness_rating":10,"id":3}];
const cutePlantData = [{"name":"Smiling Vine","photo":"https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg","cuteness_rating":9,"id":1},{"name":"Topiary","photo":"https://images.pexels.com/photos/581305/pexels-photo-581305.jpeg","cuteness_rating":10,"id":2},{"name":"Pothos","photo":"https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg","cuteness_rating":8,"id":3}];
const cuteHouseData = [{"name":"Cute House","photo":"https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg","cuteness_rating":8,"id":1},{"name":"A Frame","photo":"https://images.pexels.com/photos/4992384/pexels-photo-4992384.jpeg","cuteness_rating":9,"id":2},{"name":"A Frame","photo":"https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg","cuteness_rating":8,"id":3}];
const sortedPlantDataByRating = [{"name":"Pothos","photo":"https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg","cuteness_rating":8,"id":3},{"name":"Smiling Vine","photo":"https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg","cuteness_rating":9,"id":1},{"name":"Topiary","photo":"https://images.pexels.com/photos/581305/pexels-photo-581305.jpeg","cuteness_rating":10,"id":2}];

describe('GET /api/v1/cute-animals', () => {
  it('responds with json data for puppies', (done) => {
    request(app)
      .get('/api/v1/cute-animals')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, cutePuppyData, done);
  });
});

describe('GET /api/v1/cute-plants', () => {
  it('responds with json data for plants', (done) => {
    request(app)
      .get('/api/v1/cute-plants')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, cutePlantData, done);
  });
});

describe('GET /api/v1/cute-houses', () => {
  it('responds with json data for houses', (done) => {
    request(app)
      .get('/api/v1/cute-houses')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, cuteHouseData, done);
  });
});

describe('ADVANCED GET /api/v1/cute-plants?orderby=cuteness_rating', () => {
  it('responds with json data of sorted plants, according to the passed-in property', (done) => {
    request(app)
      .get('/api/v1/cute-plants?orderby=cuteness_rating')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, sortedPlantDataByRating, done);
  });
});
