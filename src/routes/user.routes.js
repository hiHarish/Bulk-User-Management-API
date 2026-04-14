const express = require("express");
const router = express.Router();

const { createUsers, updateUsers, exportUsers } = require("../controllers/user.controller");


router.post("/bulk-create", createUsers);
router.put("/bulk-update", updateUsers);
router.get("/export/json", exportUsers);

module.exports = router;