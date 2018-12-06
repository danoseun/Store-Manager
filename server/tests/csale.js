import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import { inValidSaleInputData, validSaleInputData } from './mockData/sale';

import { sales } from '../dummyDb';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/api/v1/sales';
const params = 'q';
const errorUrl = `/api/v1/sales/${params}`;
const saleId = 12;
const nonExistentSaleURL = `/api/v1/sales/${saleId};`;

describe('Test for (METHOD)/ Sales route', () => {
  describe('Tests for createSale API', () => {
    it('Should return 422 status code for userId is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSaleInputData[0])
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Please login with the correct details if you have been signed up by the admin');
          done();
        });
    });
    it('Should return 422 status code if userId is empty', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSaleInputData[1])
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Please login with the correct details if you have been signed up by the admin');
          done();
        });
    });
    it('Should return 401 status code if user is not an attendant', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSaleInputData[2])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('You are not authorized to visit this page');
          done();
        });
    });
    it('Should return 404 status code if user product ID is not found', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSaleInputData[3])
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Product not found');
          done();
        });
    });
    it('Should return 201 status code and post new sale', (done) => {
      const newLength = sales.length + 1;
      chai.request(app)
        .post(url)
        .send(validSaleInputData[0])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Sale record created successfully');
          expect(sales).to.have.length(newLength);
          done();
        });
    });
  });
  describe('Test for getAllSales and getOneSale API', () => {
    it('Should return 400 status code and error message', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Invalid credentials');
          done();
        });
    });
    it('Should return 400 status code and error message', (done) => {
      chai.request(app)
        .get(errorUrl)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Oops! Invalid URL');
          done();
        });
    });
    it('Should return 400 status code and error message for non-existent sale', (done) => {
      chai.request(app)
        .get(nonExistentSaleURL)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Oops! Invalid URL');
          done();
        });
    });
  });
});
