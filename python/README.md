# Python Example

## Initialize environment

We provide two methods for initializing your environment:
* Cloning and install dependencies; or
* Launching a Codespace.

### Clone and install dependencies
```bash
git clone https://github.com/osohq/usertesting.git
cd usertesting/python
pip install -r requirements.txt
```

### Codespaces
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?machine=basicLinux32gb&repo=632239158&ref=main&devcontainer_path=.devcontainer%2Fpython%2Fdevcontainer.json)

## Launch base application
```bash
python app.py
```

## Launch enforced application (using Oso Cloud client)
```bash
python enforced_client.py
```

## Launch enforced application (using Oso SDK)
```bash
python enforced_sdk.py
```
