const { bulkCreateUsers, UpdateUsers } = require("../services/user.service");
const { exportJSON } = require("../utils/export.util");
const createUsers = async (req, res) => {
  try {
    const users = req.body;
    console.log(req.body);
    if (!Array.isArray(users)) {
      return res.status(400).json({ message: "Input must be an array" });
      
    }

    if (users.length === 0) {
      return res.status(400).json({ message: "No users provided" });
    }

    const result = await bulkCreateUsers(users);

    res.status(201).json({
      message: "Users created successfully",
      count: result.length
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUsers = async (req, res) => {
  try {
    const updates = req.body;

    if (!Array.isArray(updates)) {
      return res.status(400).json({ message: "Input must be an array" });
    }

    if (updates.length === 0) {
      return res.status(400).json({ message: "No updates provided" });
    }

    const result = await UpdateUsers(updates);

    res.status(200).json({
      message: "Users updated successfully",
      result
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const exportUsers = async (req, res) => {
  try {
    await exportJSON();
    res.status(200).json({ message: "Users exported to JSON" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUsers, updateUsers, exportUsers };