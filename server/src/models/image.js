import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Định nghĩa schema cho Image
const imageSchema = new Schema({
  id: { type: String, required: true, unique: true },
  image: { type: String, required: true }, // Thay `TEXT` bằng `String` trong Mongoose
});
imageSchema.set("id", true);
// Tạo model cho Image
const Image = mongoose.model("Image", imageSchema);

export default Image;
