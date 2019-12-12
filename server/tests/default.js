import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/balakobla';
const msg1 = 'I bid you welcome to Store Manager';
const msg2 = 'Sorry, page not found!';

describe('Test for index route', () => {
  describe('GET request to home page', () => {
    it('It should return the page', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          console.log('msss', msg1);
          expect(res.body.message).to.equal(msg1);
          console.log('mssq', msg1);
          done();
        });
    });
  });
  it('It should return page not found', (done) => {
    chai.request(app)
      .get(url)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal(msg2);
        done();
      });
  });
});
