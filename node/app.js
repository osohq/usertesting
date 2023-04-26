const express = require("express");

async function start() {
  const app = express();

  app.get("/organization/:org_id", async (req, res) => {
    const orgId = req.params.org_id;

    res.status(200).send(`{"id": ${orgId}}`);
  });
  app.listen(8000);
}

start();
