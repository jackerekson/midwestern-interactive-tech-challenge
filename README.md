
# Tech Challenge

For this challenge I made two branches. I made a branch that hits an external Lorem Ipsum
API so I can put a bunch of data into my postgreSQL database quickly by clicking the buttons
to change the information on the cards on the main page. This is done by grabbing information 
from the api and sending thatinformation back into my database. I can then go into the main 
branch and get that informationfrom the back and and display it on the screen. I made it so
every time you reload the screen it changes the information inside these cards. That information
 is also sent to the contactpage to change every time that page is reloaded as well.



## Installation
Clone my project onto your computer
```bash
  git clone https://github.com/jackerekson/midwestern-interactive-tech-challenge
```
After cloning my project all you have to do is navigate to that directory and run npm i to get
 the front end working.
```bash
  cd midwester-interactive-tech-challenge
  npm i
```
To get the database going you'll have to create a postgreSQL database, copy the information
I have put into database.sql and create the tables with that. From there you will have to 
add the user, password and database name to the db.js file. Both these files are located
in the server folder. When that is complete you are ready to start adding information!(be
sure to add the database name, password and other information into both the api branch and
the main branch)

To start adding information you will have to change to the api branch if you are not already
 on it and start it up.
```bash
  git checkout api
  npm start
```
Now that the page is open you can click on the learn more buttons and this will change the 
information on the card as well as send that information to the backend. Do this a few times
to have your Lorem Ipsum data put into your backend.

Now you can checkout back onto the main branch and start that branch up and different information
will be populated on the screen every time you've reset it.

```bash
  git checkout main
  npm start
```