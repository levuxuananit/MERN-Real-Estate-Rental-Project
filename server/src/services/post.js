import Post from "../models/post.js";
import Image from "../models/image.js";
import Attribute from "../models/attribute.js";
import User from "../models/user.js";
import dotenv from "dotenv";
import { v4 } from 'uuid';
dotenv.config();

// GET ALL POSTS
export const getPostsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await Post.find({})
        // .populate({ path: 'images', select: 'image' })
        .populate({
          path: "attributesId",
          foreignField: "id", //tìm theo id
          select: "id price acreage published hashtag", // Select the relevant fields
          strictPopulate: false, // Allow population with UUID (string) references
        });
      // .populate({ path: 'user', select: 'name zalo phone' })
      // .select('id title star address description')
      // .lean(); // `.lean()` returns plain JavaScript objects

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET POSTS WITH LIMIT AND FILTER
export const getPostsLimitService = (
  page,
  query,
  { priceNumber, areaNumber }
) =>
  new Promise(async (resolve, reject) => {
    try {
      const limit = +process.env.LIMIT;
      const offset = !page || +page <= 1 ? 0 : (page - 1) * limit;

      // Constructing Mongoose query filter
      const filter = { ...query };
      if (priceNumber)
        filter.priceNumber = { $gte: priceNumber[0], $lte: priceNumber[1] };
      if (areaNumber)
        filter.areaNumber = { $gte: areaNumber[0], $lte: areaNumber[1] };

      const response = await Post.find(filter)
        .skip(offset)
        .limit(limit)
        .populate({ path: "images", select: "image" })
        .populate({
          path: "attributes",
          select: "price acreage published hashtag",
        })
        .populate({ path: "user", select: "name zalo phone" })
        .select("id title star address description")
        .lean();

      const totalCount = await Post.countDocuments(filter);

      resolve({
        err: response.length ? 0 : 1,
        msg: response.length ? "OK" : "Getting posts failed.",
        response,
        totalCount,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET NEW POSTS
export const getNewPostService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await Post.find({})
        .sort({ createdAt: -1 })
        .limit(+process.env.LIMIT)
        // .populate({ path: "images", select: "image" })
        .populate({
          path: "attributesId",
          foreignField: "id", //tìm theo id
          select: "id price acreage published hashtag", // Select the relevant fields
          strictPopulate: false, // Allow population with UUID (string) references
        })

        .select("id title star createdAt")
        .lean();

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting new posts failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const findPostByIdService = (postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await Post.findById(postId)
        // .populate({ path: "images", select: "image" })
        .populate({
          path: "attributesId",
          foreignField: "id", //tìm theo id
          select: "id price acreage published hashtag", // Select the relevant fields
          strictPopulate: false, // Allow population with UUID (string) references
        })
        .populate({
          path: "imagesId",
          foreignField: "id", //tìm theo id
          select: "id image", // Select the relevant fields
          strictPopulate: false, // Allow population with UUID (string) references
        })
        .select("id title star createdAt")
        .lean();

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Post not found.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createPostService = (postData) =>
  new Promise(async (resolve, reject) => {
    const postDataWId = { id: v4(), ...postData };
    try {
      const newPost = new Post(postDataWId); // Tạo một đối tượng Post mới từ dữ liệu đầu vào
      const savedPost = await newPost.save(); // Lưu post vào database

      resolve({
        err: 0,
        msg: "Post created successfully.",
        response: savedPost,
      });
    } catch (error) {
      reject({
        err: 1,
        msg: "Failed to create post.",
        error,
      });
    }
  });

export const updatePostService = (postId, updateData) =>
  new Promise(async (resolve, reject) => {
    try {
      const updatedPost = await Post.findOneAndUpdate(
        {id : postId},
        updateData,
        { new: true } // Tùy chọn `new: true` để trả về tài liệu đã cập nhật
      );

      resolve({
        err: updatedPost ? 0 : 1,
        msg: updatedPost ? "Post updated successfully." : "Post not found.",
        response: updatedPost,
      });
    } catch (error) {
      reject({
        err: 1,
        msg: "Failed to update post.",
        error,
      });
    }
  });

export const deletePostService = (postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(postId); // Tìm và xóa bài viết theo ID

      resolve({
        err: deletedPost ? 0 : 1,
        msg: deletedPost ? "Post deleted successfully." : "Post not found.",
        response: deletedPost,
      });
    } catch (error) {
      reject({
        err: 1,
        msg: "Failed to delete post.",
        error,
      });
    }
  });
