import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import {
  validSignUpData, inValidSignUpData, validSignInData,
  inValidSignInData
} from './mockData/user';
// import { users } from '../dummyDb';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/api/v1/auth/signup';
const url1 = '/api/v1/auth/login';

describe('Test for user route', () => {
  describe('Test for signup API', () => {
    it('Should return 201 status code and create new user', (done) => {
      // const newLength = users.length + 1;
      chai.request(app)
        .post(url)
        .send(validSignUpData[0])
        .end((err, res) => {
          res.should.have.status(201);
          // res.body.should.be.an('object');
          // expect(res.body).to.have.property('newUser');
          expect(res.body.message).to.equal('Signup was successful');
          // expect(users).to.have.length(newLength);
          done();
        });
    });
    it('Should return 201(2) status code and create new user', (done) => {
      // const newLength = users.length + 1;
      chai.request(app)
        .post(url)
        .send(validSignUpData[1])
        .end((err, res) => {
          res.should.have.status(201);
          // res.body.should.be.an('object');
          // expect(res.body).to.have.property('newUser');
          expect(res.body.message).to.equal('Signup was successful');
          // expect(users).to.have.length(newLength);
          done();
        });
    });
    it('Should return 201(3) status code and create new user', (done) => {
      // const newLength = users.length + 1;
      chai.request(app)
        .post(url)
        .send(validSignUpData[2])
        .end((err, res) => {
          res.should.have.status(201);
          // res.body.should.be.an('object');
          // expect(res.body).to.have.property('newUser');
          expect(res.body.message).to.equal('Signup was successful');
          // expect(users).to.have.length(newLength);
          done();
        });
    });
    it('Should return 400 if email is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Email cannot be undefined');
          done();
        });
    });
    it('Should return 400 if password is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Password cannot be undefined');
          done();
        });
    });
    it('Should return 400 if email is empty', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Email field cannot be empty');
          done();
        });
    });
    it('Should return 400 if email is not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Email should be a string');
          done();
        });
    });
    it('Should return 400 for invalid email format', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[4])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Email format is invalid');
          done();
        });
    });
    it('Should return 400 for too short email', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[5])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Email should be 10 to 50 characters long');
          done();
        });
    });
    it('Should return 400 for too long email', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[6])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Email should be 10 to 50 characters long');
          done();
        });
    });
    it('Should return 409 for email already in use', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[7])
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Email already exists!');
          done();
        });
    });
    it('Should return 400 if password is not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[8])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Password should be a string');
          done();
        });
    });
    it('Should return 400 if password is too short', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[9])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Password should be 8 to 20 characters long');
          done();
        });
    });
    it('Should return 400 if password is too long', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[10])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Password should be 8 to 20 characters long');
          done();
        });
    });
    /** it('Should return 400 if UserId is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[11])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('UserId cannot be undefined');
          done();
        });
    }); */
    /** it('Should return 400 if UserId is empty', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[12])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('UserId cannot be empty');
          done();
        });
    }); */
    /** it('Should return 400 if UserId is NaN', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[13])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('UserId should be a valid number');
          done();
        });
    }); */
    /** it('Should return 401 if UserId is not an admin', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[14])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('You are not authorized to visit this page');
          done();
        });
    }); */
    // it('Should return 422 if UserId is not in database', (done) => {
    //   chai.request(app)
    //     .post(url)
    //     .send(inValidSignUpData[15])
    //     .end((err, res) => {
    //       res.should.have.status(422);
    //       res.body.should.be.a('object');
    //       expect(res.body.status).to.equal('Fail');
    //       expect(res.body.message).to.equal('Please login with the correct details if you have been signed up by the admin');
    //       done();
    //     });
    // });
    it('Should return 400 if password is empty', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[16])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Password field cannot be empty');
          done();
        });
    });
    it('Should return 400 if password is not a string(2)', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidSignUpData[17])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Password should be a string');
          done();
        });
    });
  });

  describe('Test for login API', () => {
    it('Should return 400 status code if email is undefined', (done) => {
      chai.request(app)
        .post(url1)
        .send(inValidSignInData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Email cannot be undefined');
          done();
        });
    });
    it('Should return 400 status code if email is empty', (done) => {
      chai.request(app)
        .post(url1)
        .send(inValidSignInData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Please supply your email');
          done();
        });
    });
    it('Should return 400 status code if email is not a string', (done) => {
      chai.request(app)
        .post(url1)
        .send(inValidSignInData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Email should be a string');
          done();
        });
    });
    it('Should return 401 status code if email is not found in database', (done) => {
      chai.request(app)
        .post(url1)
        .send(inValidSignInData[3])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Authentication failed');
          done();
        });
    });
    it('Should return 401 status code if password is undefined', (done) => {
      chai.request(app)
        .post(url1)
        .send(inValidSignInData[4])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Password cannot be undefined');
          done();
        });
    });
    it('Should return 401 status code if password is empty', (done) => {
      chai.request(app)
        .post(url1)
        .send(inValidSignInData[5])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Password cannot be empty');
          done();
        });
    });
    it('Should return 401 status code if email does not tally with password', (done) => {
      chai.request(app)
        .post(url1)
        .send(inValidSignInData[6])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Authentication unsuccessful');
          done();
        });
    });
    it('Should return 200 status if user details is okay', (done) => {
      // const newLength = users.length;
      chai.request(app)
        .post(url1)
        .send(validSignInData[0])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.be.a('string');
          expect(res.body).to.have.property('token');
          // expect(users).to.have.length(newLength);
          done();
        });
    });
  });
});
