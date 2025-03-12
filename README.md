# How to connect the local database to your project
## Installs
Install the following with the terminal (Inside the vue project)
* npm install
* npm install express mysql2 dotenv cors axios

## Use your own login data
In createConnection in server.js you should put in your own info
* MariaDB username
* MariaDB password
* Database name, we'll use blog for now since you all have that one

## Run server and project
* Run the following command to get your server.js running:
  * node server.js
* Open a new terminal (click on the + in the terminal window)
* Run the following command:
  * npm run dev

Now check if the website shows the user and category info.

# Other data/databases
## Another Query
You can change the query by changing the string in app.get in server.js

## Use a different database
To use another database, you can call that one in the mysql.createConnection, we have blog atm, but we could change that to any database you have.
Make sure to also change the other info (queries, app.vue)