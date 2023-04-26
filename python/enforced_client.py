import json

from flask import Flask
from oso_cloud import Oso

app = Flask(__name__)

api_key = "<please provide your api key here>"
oso = Oso(url="https://cloud.osohq.com", api_key=api_key)


@app.route("/organization/<org_id>")
def get(org_id):
    actor = {"type": "User", "id": "anonymous"}
    resource = {"type": "Organization", "id": org_id}

    if not oso.authorize(actor, "view", resource):
        return "Not Found", 404

    return json.dumps({"id": org_id}), 200


if __name__ == "__main__":
    app.run(port=8000)
