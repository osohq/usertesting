import json

import oso_sdk
from flask import Flask
from oso_sdk.integrations.flask import FlaskIntegration

app = Flask(__name__)

api_key = "<please provide your api key here>"
with app.app_context():
    oso = oso_sdk.init(
        api_key,
        FlaskIntegration(),
    )


@oso.identify_user_from_request
def user() -> str:
    return "anonymous"


@app.route("/organization/<org_id>")
@oso.enforce("<org_id>", "view", "Organization")
def get(org_id):
    return json.dumps({"id": org_id}), 200


if __name__ == "__main__":
    app.run(port=8000)
