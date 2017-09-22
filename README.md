# Let the games begin!
I'm ready for some competition so here's a little something I call **The Gridium Front-end Developer Challenge!**

I square off against a randomly-generated competitor to see who's the better fit for Gridium. The applicant with the most points wins!

## View the Completed Project

[The Gridium Front-end Developer Challenge](https://wocaldwell.github.io/frontend-developer/public/) 

## Run the Project Locally

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

### Allowing for Local Dependencies

Open `/public/index.html` and in the `<head>`, replace the Bootstrap styling `<link>` with:

```
<link href="/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
```

Next, at the bottom of the `<body>` replace all of the "third-party" `<script>` tags with the following block:

```
<script type="text/javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/node_modules/angular/angular.min.js"></script>
<script type="text/javascript" src="/node_modules/angular-route/angular-route.min.js"></script>
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

### Built With

* [Javascript](https://www.javascript.com/) - Main Language
* [AngularJS](https://angularjs.org/) - JS Framework
* [Bootstrap](https://maven.apache.org/) - Frontend Framework

### Authors

* **William Caldwell** - [wocaldwell](https://github.com/wocaldwell)
* *project architect* **Nick Pleis** - [nickpleis](https://github.com/nickpleis)


## Acknowledgments

"Thank you all and GOOD NIGHT!" - Every Musician Ever

