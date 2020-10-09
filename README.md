# Fullstack Review Lesson Plan - Grocery List

### Objective: 
Build a full stack application as each student follows along on their own machines. Every student will be required to participate (either by pop-corning from one student to another or volunteering) in contributing a portion of code. 

### Learning Goals:
- Successfully create a full stack application only given a file structure and set of steps 
- Learn how to read a webpack config file: Entry and Output
- Build out an MVP front and back end 
- Create a schema and establish connection to a database
- Create and route multiple endpoints for CRUD operations
- Test server endpoints via Postman
- Create a front end client using React
- Connect client to front end utilizing Axios to perform HTTP Requests
- Test functionality 
- Considering where state is necessary

## General Outline of Sessions:

- Have each student fork and clone down the provide repository
- Review the README file
- Analyze the given file structure
- Add/Install dependencies 
- Build out server index file to handle routes
- Create connection and schema for MySQL database 
- Create a route handler, practicing separation of concerns (Router, Controller, Model)
- Only implementing CREATE and READ operations at first
- Test server endpoints via Postman
- Build out front end using React
- Practice separation of concerns for multiple components
- Utilize passing down props and functions to child components
- Create onClick handlers
- Connect front end to back end, allowing users to add to the list as well as retrieve the list
- If time permits, build out remaining CRUD operations: UPDATE and DELETE

### Tech Stack:
* Express
* MySQL
* Axios
* React
* Postman

## User Story:
While going to the grocery store, you constantly forget what you need to buy causing yourself to make multiple unneccessary trips back to the store. You try to prevent this by writing this down on a piece of paper, except you forget to bring it with you to the store as well.
After weeks of frustration and countless trips to your grocer, you decide that it is in your best interest to create a Grocery List app where you can save all of your items that you need, since no one ever forget their phone. Build out a grocery list app that can add, retrieve, update, and delete items along with their respective quantities.

### Exercise 1:
* Create a schema for the database 'Groceries'
  * Create a table called 'Items'
  * Include a column for item name as well as a respective quantity
  * Preload the table with 3 entries 
* Load the schema into Mysql

### Exercise 2:
* Write out server code within server/index.js
  * Install necessary dependencies as well as create a script to spin up the server
  * Include dependencies Express, BodyParser, Morgan, Cors, and Path
  * Have the server hosting on a port number of your choice
  * Create a get request handler for the endpoint '/' to send back the string 'Hello world, from server'
  * Confirm the server is running and check that the endpoint is correctly serving the string either through Postman or your browser
  
### Exercise 3:
* Connect your server to your database utlizing a router, controller, and model
  * Create a router that will handle the endpoint of '/groceries'
  * Create CRUD operations for the 'Groceries' database
  * Test and ensure each operation is working via Postman
  
 
