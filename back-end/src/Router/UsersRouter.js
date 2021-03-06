const express = require('express');

const AccessController = require('../controllers/AccessController');
const ProfileController = require('../controllers/ProfileUserController');
const UserController = require('../controllers/testes');
const { checkAuthenticated } = require('../middleware/auth');
const { upload } = require('../middleware/dataFile');

const router = express.Router();
router.post('/register', AccessController.saveNewUser);
router.post('/login', AccessController.userLogin);
router.get('/profile/logout', AccessController.userLogout);
router.get('/userinfo', checkAuthenticated, AccessController.userInfo);
router.get(
  '/profile/getprofile',
  checkAuthenticated,
  ProfileController.getProfile
);
router.get(
  '/profile/getregistereduser',
  checkAuthenticated,
  ProfileController.getRegisteredUser
);
router.patch(
  '/profile/edit',
  checkAuthenticated,
  upload.any(),
  ProfileController.updateProfileUser
);
router.post('/profile/edit', checkAuthenticated, upload.any(), (req, res) => {
  res.end();
});
router.get('/', checkAuthenticated, UserController.findAllUsers);
router.get('/images', checkAuthenticated, UserController.picImage);
router.get('/comments', checkAuthenticated, UserController.userComment);
router.get('/event', checkAuthenticated, UserController.events);
router.get('/adress', checkAuthenticated, UserController.adress);
router.get('/eventdone', checkAuthenticated, UserController.eventDone);
router.get('/teste', checkAuthenticated, UserController.testNpN);

module.exports = router;
