import * as services from '../services/price.js'

export const getPrices = async (req, res) => {
    try {
        const response = await services.getPricesSerivce()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
    }
}