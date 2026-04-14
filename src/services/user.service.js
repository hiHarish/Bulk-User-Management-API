const User = require("../models/user.model");

const bulkCreateUsers = async (users) => {
  const chunkSize = 1000; // 🔥 scalable size

  let results = [];

  for (let i = 0; i < users.length; i += chunkSize) {
    const chunk = users.slice(i, i + chunkSize);

    const inserted = await User.insertMany(chunk, {
      ordered: false // continue on error (duplicates)
    });

    results.push(...inserted);
  }

  return results;
};

const UpdateUsers = async (updates) => {
  const chunkSize = 1000;

  let results = [];

  for (let i = 0; i < updates.length; i += chunkSize) {
    const chunk = updates.slice(i, i + chunkSize);

    const operations = chunk.map((user) => ({
      updateOne: {
        filter: { email: user.email }, // 🔥 unique field
        update: { $set: user }
      }
    }));

    const result = await User.bulkWrite(operations);
    results.push(result);
  }

  return results;
};
module.exports = { bulkCreateUsers, UpdateUsers };