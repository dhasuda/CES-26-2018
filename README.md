# Bizuário

## Getting Started

After clonin this project, use the command:
  ```
  npm install
  ```
to install all dependencies

To run the app run:
  ```
  node app.js
  ```
After that, you can go to localhost:3000 to see the project in action

## Setting MongoDB

First download Mongo from https://www.mongodb.com/download-center#community
After that, unzip the file and create, inside the app folder another directory, called data, using this commands:
  ```
  mkdir app/db
  ```
Once you have everything you need to start the database, let's connect it. Go to the mongo folder you just downloaded, and enter the bin folder using the terminal. From there you have to run:
  ```
  ./mongod --dpath PATH/CES-26-2018/app/data
  ```
  
  After that, the server for the database will start. In another terminal window you can test your connections by going to the same bin folder and running
  ```
  ./mongo
  ```
