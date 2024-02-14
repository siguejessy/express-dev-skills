var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

router.get("/", skillsCtrl.index);
router.get("/:id", skillsCtrl.show);

//All actual paths start with "/skills"
module.exports = router;
