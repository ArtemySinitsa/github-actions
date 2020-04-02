const supertest = require('supertest');

const server = require('../app/server');

describe('API', () => {
  it('Should have `/welcome` route', (done) => {
    supertest(server)
      .get('/welcome')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Should return correct greetings', (done) => {
    supertest(server)
      .get('/welcome/team')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'Hello team' }, done);
  });
});
