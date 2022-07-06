
# Tech Challenge

This is a revision of the first code challenge I completed. There is some minor changes made to 
include removing the .css file with all the styling in it and giving each component its own file
as well as cleaning up some of the code, changing some of the variable names to make more sense
and commenting the code. (It took me a while to figure out what was going on, comments are a good
thing!)



## Installation
cd into the file you want to clone the code into, copy and run underneath code.
```bash
  git clone https://github.com/jackerekson/midwestern-interactive-tech-challenge
```
cd into the file, open the CLI and run npm i, after the npm install you will npm start.
```bash
  cd midwester-interactive-tech-challenge
  npm i
  npm start
```
To get the database going you'll have to create a postgreSQL database, copy the schema located
in database.sql under the server folder and run that in your postgreSQL database. From there 
you will have to add the user, password and database name to the db.js file also located under 
the server folder.
