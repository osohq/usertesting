# .NET Example

## Initialize environment

We provide two methods for initializing your environment:
* Cloning and install dependencies; or
* Launching a Codespace.

### Clone and install dependencies
```bash
git clone https://github.com/osohq/usertesting.git
cd usertesting/dotnet
dotnet add package OsoCloud
```

### Codespaces
[Launch codespace](https://github.com/codespaces/new?machine=basicLinux32gb&repo=632239158&ref=main&devcontainer_path=.devcontainer%2Fdotnet%2Fdevcontainer.json)

## Launch base application
```bash
dotnet run --project=app
```

## Launch enforced application
```bash
dotnet run --project=enforced
```
