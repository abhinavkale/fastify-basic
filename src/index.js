const fastify = require("fastify")({
  logger: true,
});

const routes = require("./routes");

// db
const mongoose = require("mongoose");

//db connection
mongoose
  .connect("mongodb://localhost/iplcricket")
  .then(() => console.log("Connection to db"))
  .catch((err) => console.log(err));

// routes
fastify.get("/", async (request, reply) => {
  return { visitor: "IPLCricket" };
});

routes.forEach((route, index) => {
  fastify.route(route);
});

// starting server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is running at ${address}`);
  } catch (err) {}
};

start();
