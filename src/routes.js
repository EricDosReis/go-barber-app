const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const upload = multer(multerConfig);
const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

routes.get('/signup', guestMiddleware, UserController.create);
routes.post('/signup', upload.single('avatar'), UserController.store);

routes.get('/', guestMiddleware, SessionController.create);
routes.post('/signin', SessionController.store);

routes.use('/app', authMiddleware);

routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user);

  return res.render('dashboard');
});

routes.use('/app/logout', SessionController.destroy);


module.exports = routes;
