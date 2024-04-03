const swaggerAutogen = require("swagger-autogen")();
const fs = require('fs');

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./app.js"]; // Replace './app.js' with the path to your main application file

const doc = {
  info: {
    title: "New Koa.js API",
    description: "These APIs made from Koa.js",
  },
  host: "localhost:3000", // Specify your server host
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  // Generate the Swagger documentation
  console.log("Swagger documentation generated successfully!");
}).catch((error) => {
  console.error("Error generating Swagger documentation:", error);
});
