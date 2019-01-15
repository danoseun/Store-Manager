import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import { inValidSaleInputData, validSaleInputData } from './mockData/sale';

// import { sales } from '../dummyDb';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

let attendantToken;
let adminToken;

const url = '/api/v1/sales';
// const params = 'q';
// const errorUrl = `/api/v1/sales/${params}`;
// const saleId = 12;
// const nonExistentSaleURL = `/api/v1/sales/${saleId};`;

describe('Create Token for attendant', () => {
  it('should return token for successful login for attendant', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'testatttwo@sm.com',
        password: 'passpassone'
      })
      .end((error, res) => {
        expect(res).to.have.status(200);
        attendantToken = res.body.token;
        done();
      });
  });
});

describe('Create Token for admin', () => {
  it('should return token for successful login for admin', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'adminowner@sm.com',
        password: 'adminuser'
      })
      .end((error, res) => {
        expect(res).to.have.status(200);
        adminToken = res.body.token;
        done();
      });
  });
});

describe('Test for (METHOD)/ Sales route', () => {
  describe('Tests for createSale API', () => {
    it('Should return 400 status code if productId is undefined', (done) => {
      chai.request(app)
        .post(url)
        .set('authorization', attendantToken)
        .send(inValidSaleInputData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('productId cannot be empty or undefined');
          done();
        });
    });
    it('Should return 400 status code if productId is less than 1 or NaN', (done) => {
      chai.request(app)
        .post(url)
        .set('authorization', attendantToken)
        .send(inValidSaleInputData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Invalid productId detected');
          done();
        });
    });
    /** it('Should return 400 status code if productId length is greater than 8', (done) => {
      chai.request(app)
        .post(url)
        .set('authorization', attendantToken)
        .send(inValidSaleInputData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body).to.have.property('message');
          done();
        });
    }); */
    it('Should return 400 status code if sale quantity is less than 1 or NaN', (done) => {
      chai.request(app)
        .post(url)
        .set('authorization', attendantToken)
        .send(inValidSaleInputData[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Invalid quantity detected');
          done();
        });
    });
    it('Should return 201 status code and post new sale 1', (done) => {
      // const newLength = sales.length + 1;
      chai.request(app)
        .post(url)
        .set('authorization', attendantToken)
        .send(validSaleInputData[0])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Sale record created successfully');
          // expect(sales).to.have.length(newLength);
          done();
        });
    });
    it('Should return 201 status code and post new sale 2', (done) => {
      // const newLength = sales.length + 1;
      chai.request(app)
        .post(url)
        .set('authorization', attendantToken)
        .send(validSaleInputData[1])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Sale record created successfully');
          // expect(sales).to.have.length(newLength);
          done();
        });
    });
    it('Should return 201 status code and post new sale 3', (done) => {
      // const newLength = sales.length + 1;
      chai.request(app)
        .post(url)
        .set('authorization', attendantToken)
        .send(validSaleInputData[2])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Sale record created successfully');
          // expect(sales).to.have.length(newLength);
          done();
        });
    });
    it('Should return 404 status code if product is not found', (done) => {
      // const newLength = sales.length + 1;
      chai.request(app)
        .post(url)
        .set('authorization', attendantToken)
        .send(validSaleInputData[3])
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Sorry, product does not exist');
          // expect(sales).to.have.length(newLength);
          done();
        });
    });
    it('Should return 406 status code if quantity requsted is more than what is available ', (done) => {
      // const newLength = sales.length + 1;
      chai.request(app)
        .post(url)
        .set('authorization', attendantToken)
        .send(validSaleInputData[4])
        .end((err, res) => {
          res.should.have.status(406);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body).to.have.property('message');
          // expect(sales).to.have.length(newLength);
          done();
        });
    });
  });
  describe('Test for getAllSales and getOneSale API', () => {
    it('Should return 200 status code and fetch all sales', (done) => {
      chai.request(app)
        .get(url)
        .set('authorization', adminToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Sale record successfully served');
          expect(res.body).to.have.property('rows');
          done();
        });
    });
    it('Should return 401 status code and error message if attendant is trying to access admin route', (done) => {
      chai.request(app)
        .get(url)
        .set('authorization', attendantToken)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('You are not authorized to access this route');
          done();
        });
    });
    it('Should return 404 status code and fetch no sale ', (done) => {
      chai.request(app)
        .get('/api/v1/sales/1')
        .set('authorization', adminToken)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Sale no dey yet');
          done();
        });
    });
  });
});
