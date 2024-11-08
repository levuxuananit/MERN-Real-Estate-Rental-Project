import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Định nghĩa schema cho Post
const postSchema = new Schema({
    title: { type: String, required: true },
    star: { type: String },
    labelCode: { type: String },
    address: { type: String },
    attributesId: { type: String, ref: 'Attribute' },  // Liên kết tới model Attribute
    categoryCode: { type: String },
    priceCode: { type: String },
    areaCode: { type: String },
    provinceCode: { type: String },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },  // Liên kết tới model User
    overviewId: { type: Schema.Types.ObjectId, ref: 'Overview' },  // Liên kết tới model Overview
    imagesId: { type: Schema.Types.ObjectId, ref: 'Image' },  // Liên kết tới model Image
    priceNumber: { type: Number },
    areaNumber: { type: Number }
});

// Tạo model cho Post
const Post = mongoose.model('Post', postSchema);

export default Post;
