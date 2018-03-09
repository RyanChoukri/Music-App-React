const AuthenticationController = require('./controllers/authentication'),
      TracksController = require('./controllers/track'),
      FavoritesController = require('./controllers/favorites'),
      express = require('express'),
      passportService = require('./config/passport'),
      passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    // Initializing route groups
    const apiRoutes = express.Router(),
          authRoutes = express.Router();
          trackRoutes = express.Router();
          favoriteRoutes = express.Router();

    //=========================
    // Auth Routes
    //=========================
    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/auth', authRoutes);
    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

    console.log('PASSAGE');
    //=========================
    // Tracks Routes
    //=========================
    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/tracks', trackRoutes);
    trackRoutes.get('/get', TracksController.get);
    trackRoutes.post('/add', TracksController.add);


    apiRoutes.use('/favorites', favoriteRoutes);
    favoriteRoutes.post('/add', FavoritesController.add);
    favoriteRoutes.delete('/:id', FavoritesController.delete);




  // Set url for API group routes
    app.use('/api', apiRoutes);
  };