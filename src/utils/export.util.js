const fs = require("fs");
const User = require("../models/user.model");

const exportJSON = async () => {
  const users = await User.find();

  fs.writeFileSync(
    "users.json",
    JSON.stringify(users, null, 2)
  );
};

module.exports = { exportJSON };