export const userDocs = {
  "/users": {
    post: {
      tags: ["Users"],
      summary: "Create a new user",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                firstName: { type: "string" },
                lastName: { type: "string" },
                email: { type: "string" },
                password: { type: "string" },
                confirmPassword: { type: "string" },
              },
              required: [
                "firstName",
                "lastName",
                "email",
                "password",
                "confirmPassword",
              ],
            },
          },
        },
      },

      responses: {
        201: { description: "User created successfully" },
      },
    },
  },

  "/users/me": {
    get: {
      tags: ["Users"],
      summary: "Get current user profile data",

      responses: {
        200: { description: "User verified successfully" },
      },
    },
  },
};
