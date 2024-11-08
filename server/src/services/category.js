import Category from '../models/category.js'; // Assuming Category is a Mongoose model

// GET ALL CATEGORIES
export const getCategoriesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Category.find({}).lean(); // `lean()` returns plain JavaScript objects
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get categories.',
            response
        });
    } catch (error) {
        reject(error);
    }
});
