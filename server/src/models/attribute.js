import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Định nghĩa schema cho Attribute
const attributeSchema = new Schema({
  id: { type: String, required: true, unique: true },
  price: { type: String, required: true },
  acreage: { type: String, required: true },
  published: { type: String, required: true },
  hashtag: { type: String, required: true }
});
attributeSchema.set('id', true); 
// Tạo model cho Attribute
const Attribute = mongoose.model('Attribute', attributeSchema);

export default Attribute;
