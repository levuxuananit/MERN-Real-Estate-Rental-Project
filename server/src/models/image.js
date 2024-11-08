import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Định nghĩa schema cho Image
const imageSchema = new Schema({
  image: { type: String, required: true },  // Thay `TEXT` bằng `String` trong Mongoose
});

// Tạo model cho Image
const Image = mongoose.model('Image', imageSchema);

export default Image;
