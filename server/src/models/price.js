import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Định nghĩa schema cho Price
const priceSchema = new Schema({
  code: { type: String, required: true },
  order: { type: Number, required: true },
  value: { type: String, required: true }
});

// Tạo model cho Price
const Price = mongoose.models.Price || mongoose.model('Price', priceSchema);

export default Price;
