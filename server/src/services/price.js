import Price from '../models/price.js'; // Assuming Price is a Mongoose model

// GET ALL PRICES
export const getPricesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Price.find({}, 'code value order').lean(); // `.lean()` for plain JavaScript objects
        resolve({
            err: response.length ? 0 : 1,
            msg: response.length ? 'OK' : 'Failed to get prices.',
            response
        });
    } catch (error) {
        reject(error);
    }
});
