import Province from '../models/province.js'; // Assuming Province is a Mongoose model

// GET ALL PROVINCES
export const getProvincesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Province.find({}, 'code value').lean(); // Retrieve only 'code' and 'value' fields
        resolve({
            err: response.length ? 0 : 1,
            msg: response.length ? 'OK' : 'Failed to get provinces.',
            response
        });
    } catch (error) {
        reject(error);
    }
});
