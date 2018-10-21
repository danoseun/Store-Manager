import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import {
  validProductData, inValidProductNameData, inValidDescriptionData, inValidCategoryData,
  inValidImageURLData, inValidQuantityData, inValidUnitPriceData, inValidUserIdData
} from './mockData/product';
import { products } from '../dummyDb';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/api/v1/products';
const inValidParams = 'abc';
const inValidURL = `/api/v1/products/${inValidParams}`;
const notFoundProdId = 14;
const notFound = `/api/v1/products/${notFoundProdId}`;
const foundParams = 1;
const foundURL = `/api/v1/products/${foundParams}`;

describe('Test for (METHOD)/ Products route', () => {
  describe('Tests for createProduct API', () => {
    it('Should return 400 status code for undefined product name', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidProductNameData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for product name not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidProductNameData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty product name', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidProductNameData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for invalid product name length', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidProductNameData[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for invalid character in product name', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidProductNameData[4])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    // Invalid Description
    it('Should return 400 status code for undefined description', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidDescriptionData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for description not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidDescriptionData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty description', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidDescriptionData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for invalid description length', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidDescriptionData[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for invalid character description', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidDescriptionData[4])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    // Category
    it('Should return 400 status code for undefined category', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidCategoryData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for category not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidCategoryData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty category', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidCategoryData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for invalid category characters', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidCategoryData[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for invalid category length', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidCategoryData[4])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    // Image URL DATA
    it('Should return 400 status code for undefined image URL data', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidImageURLData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for image URL not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidImageURLData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty image URL data', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidImageURLData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    // Quantity
    it('Should return 400 status code for undefined quantity', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidQuantityData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for quantity not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidQuantityData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty quantity', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidQuantityData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for invalid quantity length', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidQuantityData[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for quantity less than 1', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidQuantityData[4])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for invalid quantity character', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidQuantityData[5])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    // unitPrice
    it('Should return 400 status code for undefined unit price data', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUnitPriceData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for undefined unit price not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUnitPriceData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty unit price data', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUnitPriceData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code if unit price is less than 1', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUnitPriceData[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for invalid unit price data', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUnitPriceData[4])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    // UserID
    it('Should return 400 status code for undefined userID', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUserIdData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty userID', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUserIdData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code if userID is NaN', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUserIdData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
    it('Should return 422 status code if userID is not a string/not found', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUserIdData[3])
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          done();
        });
    });
    // create Products
    it('Should return 201 status code successful creation of product', (done) => {
      const newLength = products.length + 1;
      chai.request(app)
        .post(url)
        .send(validProductData[0])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('newProduct');
          res.body.message.should.be.a('string');
          expect(products).to.have.length(newLength);
          done();
        });
    });
    it('Should return 201 status code successful creation of product(1)', (done) => {
      const newLength = products.length + 1;
      chai.request(app)
        .post(url)
        .send(validProductData[1])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('newProduct');
          res.body.message.should.be.a('string');
          expect(products).to.have.length(newLength);
          done();
        });
    });
    it('Should return 201 status code successful creation of product(2)', (done) => {
      const newLength = products.length + 1;
      chai.request(app)
        .post(url)
        .send(validProductData[2])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('newProduct');
          res.body.message.should.be.a('string');
          expect(products).to.have.length(newLength);
          done();
        });
    });
    it('Should return 201 status code successful creation of product(3)', (done) => {
      const newLength = products.length + 1;
      chai.request(app)
        .post(url)
        .send(validProductData[3])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('newProduct');
          res.body.message.should.be.a('string');
          expect(products).to.have.length(newLength);
          done();
        });
    });
    it('Should return 409 status code if product name already exists', (done) => {
      chai.request(app)
        .post(url)
        .send(validProductData[0])
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          res.body.sampleCredentials.should.be.a('string');
          done();
        });
    });
  });
  describe('Tests for getOne/getAll Product API', () => {
    it('Should return 400 status code if productID is invalid', (done) => {
      chai.request(app)
        .get(inValidURL)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 404 status code if productID is valid but not found', (done) => {
      chai.request(app)
        .get(notFound)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 200 status code if product is found', (done) => {
      const sameLength = products.length;
      chai.request(app)
        .get(foundURL)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('foundProduct');
          res.body.message.should.be.a('string');
          expect(products).to.have.length(sameLength);
          done();
        });
    });
    it('Should return 200 status code and get all products in the db', (done) => {
      const sameLength = products.length;
      chai.request(app)
        .get(url)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('products');
          res.body.message.should.be.a('string');
          expect(products).to.have.length(sameLength);
          done();
        });
    });
  });
  describe('Tests for PutURL API', () => {
    it('Should return 205 status and successfully update existing product', (done) => {
      const sameLength = products.length;
      chai.request(app)
        .put(foundURL)
        .send(validProductData[4])
        .end((err, res) => {
          res.should.have.status(205);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('foundProduct');
          res.body.message.should.be.a('string');
          expect(products).to.have.length(sameLength);
          done();
        });
    });
  });
});
