import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Định nghĩa schema cho Overview
const overviewSchema = new Schema({
  code: { type: String, required: true },
  area: { type: String, required: true },
  type: { type: String, required: true },
  target: { type: String, required: true },
  bonus: { type: String, required: true },
  created: { type: Date, default: Date.now },  // Trường created mặc định là ngày hiện tại
  expired: { type: Date, required: true }
});

// Tạo model cho Overview
const Overview = mongoose.model('Overview', overviewSchema);

export default Overview;
