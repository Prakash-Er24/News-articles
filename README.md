

# News Article App

The live news articles are fetching from the RSS feed for updating the database with new articles for every minute.

## Features
 - Redux is used for global state management.
 - New articles are listed on the top of the page.
 - Used REST API to interact with the server.
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
 - Server - express, mongoose, cors, socket.io, axios, node-cron.
 - Client - redux, redux-thunk, material-ui, socket.io-client, axios.

## Authors

- [@Prakash-Er24](https://github.com/Prakash-Er24)


