
import mongoose from 'mongoose';


// Define the schema for the Province model
const provinceSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    }
});

// Static method for defining associations (if necessary, replace with your own logic)
provinceSchema.statics.associate = function(models) {
    // Define associations here if needed
    // Example: this.hasMany(models.Post, { foreignKey: 'userId', as: 'user' });
};

// Export the Province model
const Province = mongoose.models.Province || mongoose.model('Province', provinceSchema);
export default Province