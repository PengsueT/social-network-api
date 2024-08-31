const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/usersController.js');

// GET all users
router.route('/')
  .get(getUsers)
  .post(createUser);

// GET, DELETE, and UPDATE a single user by ID
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendsId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;