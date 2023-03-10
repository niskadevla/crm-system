import request from 'supertest';

import { app } from '../app';
import { mongoConnect, mongoDisconnect } from '../middleware/mongo/mongo-db.service';
import { ENV_CONFIG } from '../env-config';
import { IUser } from '../entities';
import { matchPasswords } from '../utils';

describe('Auth Api', () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe('Test Post /login', () => {
    const user: IUser = {
      email: 'someemail@gm.com',
      password: '12345'
    };

    it('It should respond with 200 success', async () => {
      await request(app).post(`${ENV_CONFIG.API_URL}/auth/login`).send(user).expect('Content-type', /json/).expect(200);
    });

    it('It should respond 401 and Passwords do not match', async () => {
      user.password = '1234';

      const response = await request(app)
        .post(`${ENV_CONFIG.API_URL}/auth/login`)
        .send(user)
        .expect('Content-type', /json/)
        .expect(401);

      expect(response.body).toStrictEqual({ message: 'Passwords do not match. Try again!' });
    });

    it('It should return 404 - User does not exist', async () => {
      user.email = 'some@email.com';

      const response = await request(app)
        .post(`${ENV_CONFIG.API_URL}/auth/login`)
        .send(user)
        .expect('Content-type', /json/)
        .expect(404);

      expect(response.body).toStrictEqual({ message: `User with this email ${user.email} does not exist!` });
    });
  });

  describe('Test Post /register', () => {
    const user: IUser = {
      email: `some-email@email.co`,
      password: '54321'
    };

    it('It should respond with 201 success', async () => {
      const randomNumber = Math.random();
      user.email = `some-email${randomNumber}@email.comm`;

      const response = await request(app)
        .post(`${ENV_CONFIG.API_URL}/auth/register`)
        .send(user)
        .expect('Content-type', /json/)
        .expect(201);

      expect(response.body.email).toBe(user.email);
      expect(matchPasswords(user.password, response.body.password)).toBeTruthy();
    });

    it('It should respond 409 - user already exist ', async () => {
      const response = await request(app)
        .post(`${ENV_CONFIG.API_URL}/auth/register`)
        .send(user)
        .expect('Content-type', /json/)
        .expect(409);

      expect(response.body).toStrictEqual({
        message: `User with this ${user.email} already exists. Try another one!`
      });
    });

    it('It should catch 500 Error', async () => {
      const user = {};

      const response = await request(app)
        .post(`${ENV_CONFIG.API_URL}/auth/register`)
        .send(user)
        .expect('Content-type', /json/)
        .expect(500);

      expect(response.body.message).toBeTruthy();
    });
  });
});
