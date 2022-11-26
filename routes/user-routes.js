const { Router } = require("express");

const { 
    getLastPosts
} = require("../controllers/user-controllers.js");

const router = Router();

router.get("/posts", getLastPosts);

module.exports = router;