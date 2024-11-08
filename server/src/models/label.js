import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Định nghĩa schema cho Label
const labelSchema = new Schema({
  code: { type: String, required: true },
  value: { type: String, required: true }
});

// Tạo model cho Label
const Label = mongoose.model('Label', labelSchema);

export default Label;
