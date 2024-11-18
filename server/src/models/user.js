import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  zalo: {
    type: String,
  },
  fbUrl: {
    type: String,
  },
  avatar: {
    type: String, // Mongoose uses Buffer for binary data
  },
});

userSchema.set("id", true)
// Static method for defining associations (if necessary)
userSchema.statics.associate = function (models) {
  // Define associations here if needed
  // Example: this.hasMany(models.Post, { foreignKey: 'userId', as: 'user' });
};

// Export the User model
const User = mongoose.model("User", userSchema);

export default User;
