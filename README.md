# Fastify

### Fastify is web Framework which is the alternate version for Express. It is inspired by `Hapi` and `Express` and, it is one of the **fastest web frameworks**. It shines when building extremely fast HTTP APIs that use JSON as the data format.


## Features

  1. Highly performant
  2. Schema based
  3. Logging
  4. Developer friendly


![Screenshot from 2021-06-30 21-57](https://user-images.githubusercontent.com/56266493/124002183-0d65fc80-d9f3-11eb-95b1-fb3e6b18a0b2.png)


```javaScript
  npm install fastify
```

### Server file
```javaScript
  const fastify = require("fastify")({
    logger: true,
  });
  
  // routes
  fastify.get("/", async (request, reply) => {
    return { visitor: "Hello World" };
  });
  
  // starting server
  const start = async () => {
    try {
      await fastify.listen(3000);
      fastify.log.info(`Server is running at ${address}`);
    } catch (err) {}
  };

  start();
 ```
 
 ### Different route methods can use handle using fastify as
 ```javaScript
   method: "GET",
   url: "/api/team",
   handler: Controller.getController,
 ```
 
 and can access route which becomes much more easier
 ```javaScript
    fastify.route(options);
 ```
 
 ### Here I build basic REST API CricketIPL application to know how fastify works and its implementation. 
 
 ## Technology/Tools used
    MongoDB
    NodeJS
    Fastify
    Mongoose
    Postman
    
    
  ![Screenshot from 2021-06-30 21-51](https://user-images.githubusercontent.com/56266493/124003729-e6a8c580-d9f4-11eb-88bd-8d416538d5e6.png)
  
  
  ## There is lot to explore more on Fastify. [Click Here](https://www.fastify.io/)
