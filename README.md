This project is an example of using React to display some data provided via a simple JS module.
To be a bit more creative than just importing the module and dumping the data out I am using React Router to create a simple single page application that upon visiting (or button click) will generate a random job applicant based on the sample data provided.

React-Vis/Bootstrap are used to style things up and display the data, otherwise React is the main framework to connect all the moving pieces.

To process the data from Gridium I am using the following:
```
React/React-Router/React-Vis
PUG/SASS/Bootstrap/Animate.css/Flat-Ui
Babel/Webpack/ES6
Gulp/Jest
```

./public/js/index.js has been moved into source/app/assets/Developer/index.js and slightly changed to adapt ES6 syntax and webpack module loading.

A demo will be viewable at http://66.150.214.52/gridium/ when complete.

---

# Gridium Developer Application

Write some code that processes the data in `./public/js/index.js` into a cool web document. Get creative! We want to see what you can do.

## Instructions

Fork, Code, Submit a Pull Request
Use the libraries or framework of your choice, show us what you know!

## Getting Started (if using Node/NPM)
We're polygots. You'll find Python, R, Java, Javascript, and a few other technologies in use at Gridium. Use whatever you feel most comfortable with.

If you choose to go the JS route then the basic work is done. Use NPM to initialize things.

### Prerequisites

Node, NPM should be installed

```
> node -v
v7.10.0
> npm -v
4.2.0
```

### Installing

Install project dependencies

```
> npm i
```

### Running the Project

[http-server](https://www.npmjs.com/package/http-server) has been included for convenience, run with the following script:
```
> npm start
Starting up http-server, serving ./public
Available on:
  http://127.0.0.1:8080
  http://192.168.1.213:8080
  http://192.168.100.1:8080
Hit CTRL-C to stop the server
```

