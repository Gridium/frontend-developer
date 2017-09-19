module.exports = ({ routes, route }) =>
  routes(require,
    route('app', '/', { dir: '' },
      //Base screen
      route('Frontend', '/',
        // Views
        route('Welcome'),
        route('About')
      )
    )
  );