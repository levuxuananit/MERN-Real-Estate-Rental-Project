import Area from '../models/area.js'; // Đảm bảo bạn import model Mongoose đúng cách

// GET ALL AREA
export const getAreasService = () => new Promise(async (resolve, reject) => {
    try {
        // Sử dụng Mongoose để lấy tất cả các area
        const response = await Area.find({}, 'code value order'); // Truy vấn và chọn trường cần thiết

        resolve({
            err: response.length > 0 ? 0 : 1,
            msg: response.length > 0 ? 'OK' : 'Failed to get areas.',
            response
        });
    } catch (error) {
        reject(error);
    }
});
