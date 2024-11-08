import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const areaSchema = new Schema({
  code: { type: String, required: true },
  value: { type: String, required: true },
  order: { type: Number, required: true }
});

const Area = mongoose.model('Area', areaSchema);

export default Area;
