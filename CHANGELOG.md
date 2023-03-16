# Change Log - CRM System

Create the frontend and backend for the CRM system web application. There is the following tech stack. 
FE - Angular, RxJs, Typescript, canvas, Jest, materialize, Chart.js, eslint, prettier
BE - Node.js, express, MongoDB, Mongoose, bcrypt, passport, multer, morgan, cors, jest, supertest, Typescript

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## MVP notes

Project is hosted on [Link](https://ec2-3-75-194-76.eu-central-1.compute.amazonaws.com)

## 1.1.0 [Unreleased]

## Fixed

- [BE] Fix file regexp - remove g flag

## 1.0.0 (MVP 1)

### Analytics

- Get overview of statistics for yesterday
  - Includes Revenue and Orders statistics
- Get analytics of revenue for all period
  - Includes 2 charts with Revenue and Orders 

### Order

- List of orders in the database by user id
  - Authenticated user only
  - Pagination using limit number of results and page
  - Filter by order number, date start, date end
- Create order by user id
  - Authenticated user only
  - Add list of positions

### Position (sub category)

- List of all positions in the database by user id and category id
  - Authenticated user only
- Delete position by id
  - Authenticated user only
- Create position by user id
  - Authenticated user only
- Update position by id
  - Authenticated user only

### Category

- List of all categories in the database by user id
  - Authenticated user only
- Get single category by id
  - Authenticated user only
- Delete category by id
  - Authenticated user only
- Create category by user id
  - Authenticated user only
  - Validation on file size (multer)
  - Validation on file mime type (multer)
- Update category by id
  - Authenticated user only

### Users & Authentication

- Authentication uses JWT
- User registration
  - Use email and password
  - Email should not exist
- User login
  - User can login with email and password
  - The token expires after 1 hour
  - Plain text password compares with stored hashed password
  - Once logged in, a token will be sent as response
  - FE side uses the token in the "Authorization" header
- User logout is implemented on FE
  - set token = null
  - clear localStorage
- Use passport-jwt strategy for authentication and reset token (passport)
- User CRUD
  - user can create, delete, update any entities

### Security

- Encrypt passwords (bcryptjs)
- Add headers for security (helmet)
- Use cors to make API public (cors)

### Code quality

- ESlint
- Husky:
  - pre-commit hook: lint
  - pre-push hook: lint + test
- Prettier

### Documentation

- Use Postman collection
- Add changelog.md
- Add readme.md

### Deployment (AWS)

- Push to GitHub
- Create a Dockerfile
- Push the image to the Dockerhub
- Use PM2 process manager
- Install an SSL using Let's Encrypt
- Use SSH to connect to AWS
- Pull a Dockerfile to AWS server
- Deploy to AWS using EC2

### CI/CD

- CI pipeline for Pull requests: lint, test, build
- CD pipeline consist of 1 job:
  - lint, test, build
- CI/CD implemented by use of GitHub Actions
- Added MongoDB in GitHub Actions