import json

from flask import Flask

app = Flask(__name__)


@app.route("/organization/<org_id>")
def get(org_id):
    return json.dumps({"id": org_id}), 200


if __name__ == "__main__":
    app.run(port=8000)
