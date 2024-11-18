import axios from '../axiosConfig'

export const apiGetCurrent = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/v1/users/get-current',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})