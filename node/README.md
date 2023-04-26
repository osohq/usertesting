# Node Example

## Initialize environment

We provide two methods for initializing your environment:
* Cloning and install dependencies; or
* Launching a Codespace.

### Clone and install dependencies
```bash
git clone https://github.com/osohq/usertesting.git
cd usertesting/node
yarn
```

### Codespaces
[Launch codespace](https://github.com/codespaces/new?machine=basicLinux32gb&repo=632239158&ref=main&devcontainer_path=.devcontainer%2Fnode%2Fdevcontainer.json)

## Launch base application
```bash
yarn app
```

## Launch enforced application (using Oso Cloud client)
```bash
yarn client
```

## Launch enforced application (using Oso SDK)
```bash
yarn sdk
```
