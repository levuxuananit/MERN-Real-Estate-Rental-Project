import axiosConfig from '../axiosConfig'

export const apiGetCategories = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/categories/',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})