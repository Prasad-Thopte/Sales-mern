

###     Project Overview

    1. Created Node.js appliction
    2. Created REST API for following fuctionality
        * User Registration
        * Login
        * Add New Entry
        * Top 5 Sales
        * Total Revenue
    3. Intigrate with frontend
    4. Created responsive app using bootstrap 




###    How to Run Project

    - BACKEND

    * in project folder
    * cd backend
    * npm install
    * in some cases 
    * npm update --force
    * npm start
    * app will started at server 9002


    - FRONTEND

    * in project folder
    * cd backend
    * npm install
    * in some cases 
    * npm update --force
    * npm start
    * app will started at server 3000




###     Project Stucture

    - Backend
     index.js(main file of node apllication)
      Configuration of DATABASE
      include User and Product SCHEMA
      API calls 
      which will store user and product data to MONGODB


      -Frontend
      App.js is main file that includes routing of the project
      components folder contains every single page componnent
      where Header.js file woks as a parent page using OUTLET 
      that is common on every page
      Header changes as per user is login or not
