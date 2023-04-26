const { init } = require("@osohq/express");
const express = require("express");

async function start() {
  const app = express();

  const apiKey =
    "<please provide your api key here>";
  const oso = init({
    apiKey,
    defaultActorId: (_req) => "anonymous",
  });

  app.get(
    "/organization/:org_id",
    oso.enforce({
      resourceId: ":org_id",
      action: "view",
      resourceType: "Organization",
    }),
    async (req, res) => {
      const orgId = req.params.org_id;
      res.status(200).send(`{"id": ${orgId}}`);
    }
  );
  app.listen(8000);
}

start();
