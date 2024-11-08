import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Định nghĩa schema cho Category
const categorySchema = new Schema({
  code: { type: String, required: true },
  value: { type: String, required: true },
  header: { type: String, required: true },
  subheader: { type: String, required: true }
});

// Tạo model cho Category
const Category = mongoose.model('Category', categorySchema);

export default Category;
