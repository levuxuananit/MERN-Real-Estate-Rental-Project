import User from '../models/user.js'; // Assuming User is a Mongoose model

// GET CURRENT USER BY ID
export const getOne = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await User.findById(id, '-password').lean(); // Exclude the 'password' field
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get user.',
            response
        });
    } catch (error) {
        reject(error);
    }
});
