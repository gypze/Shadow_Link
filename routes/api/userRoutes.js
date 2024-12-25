// This file is the userRoutes.js file in the api directory. This file is the route for the user data.
const router = require("express").Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller"); // ../../ indicates to go up two levels in the directory tree from the current location 
// to find the controllers directory and the user-controller.js file. So in simpler terms the first ../ is  the root directory of the project, 
// the second ../ is the api directory, and the controllers directory is in the api directory.  
// 

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
