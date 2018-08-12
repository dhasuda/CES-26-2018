# Bizuário

## Getting Started

First you have to install node and npm.
After clonin this project, use the command:
  ```
  npm install
  ```
to install all dependencies

Before you can run the app, you have to set MongoDB. Just follow "Setting MongoDB" below.
To run the app run:
  ```
  node app.js
  ```
Or you can run the commando: 
  ```
  npm run server
  ```
That will restart the server everytime you modify or save any file.

After that, you can go to localhost:3000 to see the project in action

## Setting MongoDB

First download Mongo from https://www.mongodb.com/download-center#community
After that, unzip the file and create, inside the app folder another directory, called data, using this commands:
  ```
  mkdir app/db
  ```
Once you have everything you need to start the database, let's connect it. Go to the mongo folder you just downloaded, and enter the bin folder using the terminal. From there you have to run:
  ```
  ./mongod --dbpath PATH/CES-26-2018/app/data
  ```
  
  After that, the server for the database will start. In another terminal window you can test your connections by going to the same bin folder and running
  ```
  ./mongo
  ```

## Running the React Native project

This is the part of the project that corresponds to the mobile app itself. It's contained into the Bizuario folder. First go to the Bizuario folder via terminal:
  ```
  cd Bizuario
  ```
And then run:
  ```
  npm start
  ```
To see the result in your smartphone visit the Expo website: https://expo.io
