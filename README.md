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
- Atlas MongoDB hosting account (free)
- Heroku web app hosting account (free)

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
- config/default.json: listed in .gitignore to keep password secure

## Run locally against your Atlas MongoDB

- Fork the repo
- Clone your repo down to your local machine
- Create config/default.json
- Install dependencies with `npm install`
- Run the server locally with `npm run dev`

## View local app in browser

- <http://localhost:5001>
- <http://localhost:5001/todo>

## Demo site hosted with Heroku web hosting service (free tier)

- [Heroku](https://www.heroku.com/)
- Create free account
- New / Create new app / enter a name / create app.
- Under app Settings, create environment variable MONGODB_URI and set to Atlas Connection string (private and secure).
- Under app Deploy / Deployment mthod / select GitHub master branch to deploy when there's a new commit pushed to master.

## View Heroku app in browser

Optional: update the following URIs to point to your Heroku app:

- <https://todo-server-heroku-app.herokuapp.com/>
- <https://todo-server-heroku-app.herokuapp.com/todo>

## Test requests with Postman

- Install [Postman](https://www.getpostman.com/)

Collection: "todo-server (local)"

- Set VERB + URI (and configure request if sending POST data)
- GET <http://localhost:5001/todo> - Send
- POST <http://localhost:5001/todo> - set Body / Raw / JSON / set "name" - Send
- DELETE <http://localhost:5001/todo/id> - copy id from post call and replace id - Send

Collection: "todo-server (heroku)"

- GET <https://todo-server-heroku-app.herokuapp.com/todo>
- POST <https://todo-server-heroku-app.herokuapp.com/todo> - set Body / Raw / JSON - Send
- DELETE <https://todo-server-heroku-app.herokuapp.com/todo/id> - copy id from post call and replace id - Send

See [Postman Screenshot](docs/postman.PNG)

## Resources

- [MERN Shopping List](https://github.com/bradtraversy/mern_shopping_list)

## See Also

- [More App Examples](https://profcase.github.io/web-apps-list/)

