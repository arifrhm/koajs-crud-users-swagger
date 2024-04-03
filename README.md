# Koa.js CRUD Users API with Swagger Documentation

This project is a simple CRUD (Create, Read, Update, Delete) API built using Koa.js. It allows you to perform CRUD operations on users and comes with Swagger documentation for easy testing and exploration of the API endpoints.

## Features

- Create a new user
- Read all users or get a user by ID
- Update an existing user
- Delete a user

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node swagger.js
    npm run dev
    ```

5. Access the API documentation at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## Endpoints

- `POST /users`: Create a new user.
- `GET /users`: Get all users.
- `GET /users/:id`: Get a user by ID.
- `PUT /users/:id`: Update a user by ID.
- `DELETE /users/:id`: Delete a user by ID.

## Dependencies

- [Koa.js](https://koajs.com/): Web framework for Node.js.
- [Swagger UI Koa](https://www.npmjs.com/package/swagger-ui-koa): Middleware for serving Swagger UI in Koa applications.
- [Body Parser Koa](https://www.npmjs.com/package/koa-bodyparser): Middleware for parsing request bodies in Koa applications.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).