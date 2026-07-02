import swaggerJsDoc from "swagger-jsdoc";
import { userDocs } from "#/users/user-docs.js";
import { authDocs } from "#/auth/auth-docs.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Authentication API",
      version: "1.0.0",
      description: "API documentation for the User Authentication System",
    },

    paths: {
      ...userDocs,
      ...authDocs,
    },

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },

        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "accessToken",
        },
      },
    },

    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
  },
  apis: [],
};

export const swaggerSpec = swaggerJsDoc(options);
