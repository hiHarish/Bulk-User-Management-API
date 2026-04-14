const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,            // 🔥 Unique constraint
      lowercase: true,
      trim: true,
      index: true              // 🔥 Index for fast lookup
    },

    age: {
      type: Number,
      required: true,
      min: 18,
      max: 100
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      index: true              // 🔥 Index for filtering
    }
  },
  {
    timestamps: true
  }
);

// 🔥 Additional Indexing (important for performance)
userSchema.index({ email: 1 });
userSchema.index({ status: 1 });

module.exports = mongoose.model("User", userSchema);