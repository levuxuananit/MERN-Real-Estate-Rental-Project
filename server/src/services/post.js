import Post from '../models/post.js';
import Image from '../models/image.js';
import Attribute from '../models/attribute.js';
import User from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();

// GET ALL POSTS
export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Post.find({})
            // .populate({ path: 'images', select: 'image' })
            .populate({
                path: 'attributesId',
                foreignField: 'id', //tìm theo id
                select: 'id price acreage published hashtag', // Select the relevant fields
                strictPopulate: false // Allow population with UUID (string) references
            });
        // .populate({ path: 'user', select: 'name zalo phone' })
        // .select('id title star address description')
        // .lean(); // `.lean()` returns plain JavaScript objects

        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts failed.',
            response
        });
    } catch (error) {
        reject(error);
    }
});

// GET POSTS WITH LIMIT AND FILTER
export const getPostsLimitService = (page, query, { priceNumber, areaNumber }) =>
    new Promise(async (resolve, reject) => {
        try {
            const limit = +process.env.LIMIT;
            const offset = (!page || +page <= 1) ? 0 : (page - 1) * limit;

            // Constructing Mongoose query filter
            const filter = { ...query };
            if (priceNumber) filter.priceNumber = { $gte: priceNumber[0], $lte: priceNumber[1] };
            if (areaNumber) filter.areaNumber = { $gte: areaNumber[0], $lte: areaNumber[1] };

            const response = await Post.find(filter)
                .skip(offset)
                .limit(limit)
                .populate({ path: 'images', select: 'image' })
                .populate({ path: 'attributes', select: 'price acreage published hashtag' })
                .populate({ path: 'user', select: 'name zalo phone' })
                .select('id title star address description')
                .lean();

            const totalCount = await Post.countDocuments(filter);

            resolve({
                err: response.length ? 0 : 1,
                msg: response.length ? 'OK' : 'Getting posts failed.',
                response,
                totalCount
            });
        } catch (error) {
            reject(error);
        }
    });

// GET NEW POSTS
export const getNewPostService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Post.find({})
            .sort({ createdAt: -1 })
            .limit(+process.env.LIMIT)
            .populate({ path: 'images', select: 'image' })
            .populate({ path: 'attributes', select: 'price acreage published hashtag' })
            .select('id title star createdAt')
            .lean();

        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting new posts failed.',
            response
        });
    } catch (error) {
        reject(error);
    }
});
