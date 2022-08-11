A simple react application which implements login using firebase, and allows users to create posts and comments.

### Running the application
To run the frontend application: `npm start` in `Frontend` directory  
To run the backend application: `npm start` in `Post-services` directory  

Firebase is used as the database for user authentication  
MySQL was used as the database, so it also has to be running  


The current schema used:

`posts` table:
|column|data type|
|-----|-----|
|author|VARCHAR(80)|
|postid|INT (Primary Key)|
|date_created|DATETIME|
|date|VARCHAR(20)|
|content|VARCHAR(255)|
|likes|INT|

Example of `posts` row:
|column|value|
|-----|-----|
|author|test@test.com|
|postid|2|
|date_created|'2022-08-05 00:00:00'|
|date|'1659708600775'|
|content|'Today I am feeling good'|
|likes|4|