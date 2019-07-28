# todo-server

> Simple server app that uses MongoDB, Node.js, and the Express web framework to provide a todo API.
Returns JSON data using standard REST requests. Can be used to support MEAN/MERN/MEVN full-stack apps.

This is just the server-side - no client-side GUI is included.

## Links

- [Server Demo](https://todo-server-heroku-app.herokuapp.com/)
- [Server Source](https://github.com/profcase/todo-server)

## Requirements

- A browser (e.g., Firefox or Chrome)
- A text editor (e.g., VS Code or Notepad++, or Chrome)
- Windows Powershell to run commands
- Node.js

## Optional Windows - installing & upgrading programs

- Install [Chocolatey](https://chocolatey.org/) windows package manager

```Powershell
choco install nodejs postman heroku-cli -y
choco upgrade all -y
```

## Data hosted with Atlas (free tier)

- [Atlas](https://www.mongodb.com/cloud/atlas)
- In Atlas, create new context (e.g., todo-server-data)
- Get connection string
- config: copy example to default.json and add password
- config/default.json: list in .gitignore to keep pwd secure

## Run locally against your Atlas MongoDB

- Fork the repo
- Clone your repo down to your local machine
- Create config/default.json

- Install dependencies with `npm install`
- Run the server locally with `npm start`

## View local app in browser

- <http://localhost:5001>
- <http://localhost:5001/todo>

## Test requests with Postman

- Install [Postman](https://www.getpostman.com/)
- Set VERB + URI (and configure request if sending POST data)
- GET <http://localhost:5001/todo> - Send
- POST <http://localhost:5001/todo> - set Body / Raw / JSON - Send
- DELETE <http://localhost:5001/todo/id> - copy id from post call and replace id - Send

## Demo site hosted with Heroku web hosting service (free tier)

- [Heroku](https://www.heroku.com/)
- Create free account
- New / Create new app / enter a name / create app.
- Under app settings, create environment variable MONGODB_URI and set to Atlas Connection string (private and secure).

## View Heroku app in browser

Optional: update the following URIs to point to your Heroku app:

- <https://todo-server-heroku-app.herokuapp.com/>
- <https://todo-server-heroku-app.herokuapp.com/todo>

## Resources

- [MERN Shopping List](https://github.com/bradtraversy/mern_shopping_list)

## See Also

- [js-colors](https://github.com/profcase/js-colors)
- [js-console](https://github.com/profcase/js-console)
- [js-e1](https://github.com/profcase/js-e1)
- [js-gui](https://github.com/profcase/js-gui)
- [js-gui-storage](https://github.com/profcase/js-gui-storage)
- [js-gui-vue](https://github.com/denisecase/js-gui-vue)
- [js-node](https://github.com/denisecase/js-node)
- [js-node-express](https://github.com/denisecase/js-node-express)
- [todo-server](https://github.com/profcase/todo-server)
- [todo-server-jwt](https://github.com/profcase/todo-server-jwt)
