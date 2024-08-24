import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here 

  app.get("/custom/pages", async (req, res) => {

    const response = await payload.find({
      collection: "pages",
      limit: 300,
    });

    response.docs.forEach((doc) => {

      delete doc.content;
    });

    res.json(response);
  });

  app.get("/custom/pages/:tag", async (req, res) => {
    const response = await payload.find({
      collection: "pages",
      where: {
        tags: {
         in: [req.params?.tag]
        },
      },
      limit:300
    });
    response.docs.forEach((doc) => {
      delete doc.content;
    });

    res.json(response);
  });

  app.listen(3000);
};

start();
