

# News Article App

The news articles are fetched from the different RSS feeds to update the database with new articles every minute.

## Features
 - User can Register and login.
 - Password is encrypted using 'bcryptjs' while registering. 
 - Redux is used for global state management.
 - New articles are listed on the top of the page.
 - Used REST API to interact with the server.
 - Used https://rss2json.com/ to convert XML to JSON format.
 - Storing the news articles in the database which is not present.
 - Mongoose is used as a driver to connect with MongoDB.
 - Used 'node-cron' to make API requests to fetch RSS feeds at a regular time intervals.
 
## Installation

Clone the repository

```
  git clone https://github.com/Prakash-Er24/News-articles.git
```
### Client 
Go to the directory
```
  cd client
``` 
Install the packages
```
  npm install <package-name>
```
In the project directory, you can run:

````
  npm start
````

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Server  
Go to the directory
```
  cd server
``` 
Install the packages
```
  npm install <package-name>
```
Run the server
```
  nodemon index.js
```
Use nodemon to run the server (Recommended).

## Packages installed 
 - Server - express, mongoose, cors, jsonwebtoken, bcryptjs, validator, axios, node-cron.
 - Client - redux, redux-thunk, material-ui, sweetalert, axios, formik, yup.

## Authors

- [@Prakash-Er24](https://github.com/Prakash-Er24)


