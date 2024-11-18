import axiosConfig from '../axiosConfig'
import axios from 'axios'

export const apiGetPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/posts/',
        })
        console.log(response)
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiGetPostsLimit = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/posts/limit`,
            params: query
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiGetNewPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/posts/new-post`,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiUploadImages = (images) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`,
            data: images,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})