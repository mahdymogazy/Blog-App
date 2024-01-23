const express = require("express")
const userController = require("../controllers/UserController")
const bcrypt = require("bcrypt")
const router = express.Router()

//////////////////////////////////
router.get('/', (req, res) => {
  res.send('hi in user route')
})
/////////////////
route.post("/register", async (req, res) => {
  try {
    let { email, password, name  } = req.body;
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      let data = await UserController.Register(email, password, name );
      res.send("registered successfully");
    });
  } catch (e) {
    res.send(e);
  }
});
////////////////////////////////////////

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let data = await userController.Login(email);

  console.log(data);
  const match = await bcrypt.compare(password, data.password);
  if (match) {
    res.send("login successfully");
  } else {
    res.send("login failed");
  }
});
/////////////////////////////////////

router.post("/follow", async (req, res) => {
  let { currentUserId, toFollowUserId} = req.body;
  let data = await userController.followUser( currentUserId, toFollowUserId);
  console.log(data);

  if (data) {
    res.send("login successfully");
  } else {
    res.send("login failed");
  };
});
/////////////////////////////////////////////////
router.post("/unfollow", async (req, res) => {
  let {  currentUserId, toUnfollowUserId} = req.body;
  let data = await userController.unfollowUser(  currentUserId, toUnfollowUserId);
  console.log(data);

  if (data) {
    res.send("login successfully");
  } else {
    res.send("login failed");
  };
});
///////////////////////////////////////////////////////////
// router.post("/follow", (req, res) => {
//   const { currentUserId, toFollowUserId } = req.body
//   userController.followUser(currentUserId, toFollowUserId).then((result) => res.send(result)).catch((error) => res.send(error))
// })
/////////////////////////////////////
module.exports = router; 
