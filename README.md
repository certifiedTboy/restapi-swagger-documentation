# ExpressJS API Code for Swagger Documentation

This is a simple backend API with ExpressJS for the REST API documentation with Swagger article.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Token (jsonwebtoken), bcryptjs

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

## Installation

1.  Clone the repository:

    ```bash
    git clone <your-repository-url>
    cd swagger-documentation
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the root of the project and add the environment variables (see `.env.example` below).

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```
PORT=3000
DB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
```

## Running the Application

You can start the server in development mode (which might include features like hot-reloading if configured with a tool like `nodemon`):

```bash
npm run dev
```

Or, to run the application in production mode:

```bash
npm start
```

The server will start on `http://localhost:3000` (or the port you have configured).

## API Endpoints

The API routes are prefixed with `/api/v1`.

### Auth Routes (`/api/v1/auth`)

- `POST /login`: Log in a user and receive access and refresh tokens.
- `POST /refresh`: Get a new access token using a valid refresh token.

### User Routes (`/api/v1/users`)

- `POST /`: Create a new user (register).
- `GET /`: Get a list of users (requires authentication/authorization).
