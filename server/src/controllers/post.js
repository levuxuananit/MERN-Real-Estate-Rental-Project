import * as postService from "../services/post.js";

export const getPosts = async (req, res) => {
  try {
    const response = await postService.getPostsService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};
export const getPostsLimit = async (req, res) => {
  const { page, priceNumber, areaNumber, ...query } = req.query;
  try {
    const response = await postService.getPostsLimitService(page, query, {
      priceNumber,
      areaNumber,
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};
export const getNewPosts = async (req, res) => {
  try {
    const response = await postService.getNewPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const findPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await postService.findPostByIdService(id);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const postData = req.body; // Lấy dữ liệu post từ request body
    const response = await postService.createPostService(postData); // Gọi đến service để tạo post

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at create post controller: " + error,
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID bài viết từ params
    const updateData = req.body; // Dữ liệu mới từ request body

    const response = await postService.updatePostService(id, updateData); // Gọi service để cập nhật post

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at update post controller: " + error,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID bài viết từ params

    const response = await postService.deletePostService(id); // Gọi service để xóa post

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at delete post controller: " + error,
    });
  }
};
