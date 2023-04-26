const express = require("express");
const { Oso } = require("oso-cloud");

async function start() {
  const app = express();

  const apiKey =
    "<please provide your api key here>";
  const oso = new Oso("https://cloud.osohq.com", apiKey);

  app.get("/organization/:org_id", async (req, res) => {
    const orgId = req.params.org_id;

    const actor = { type: "User", id: "anonymous" };
    const resource = { type: "Organization", id: orgId };
    if ((await oso.authorize(actor, "view", resource)) === false) {
      // Handle authorization failure
      res.status(404).send("Not Found");
      return;
    }

    res.status(200).send(`{"id": ${orgId}}`);
  });
  app.listen(8000);
}

start();
