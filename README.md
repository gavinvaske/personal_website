# personal_website


## Getting Started (Without Docker)

1. Clone this repository
2. Run `npm install` within the root directory
3. Run `npm start nodemon` to start the application using nodemon
4. Visit `localhost:8080`

**NOTE**: Any changes to source code will be applied automatically (thanks to Nodemon)

## Getting Started (With Docker)
1. Clone this repository
2. Run `npm install` within the root directory
3. Build the docker container using `docker build -t personal_website:latest .`
4. Run the docker container using `docker run -d -p 8080:8080 personal_website:latest`
5. Visit `localhost:8080`

**NOTE**: Any changes to source code will require steps #3 and steps #4 to be redone to view the changes.