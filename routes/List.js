

const StatusCodeModel = require('../models/StatusCodes')

const getList = async (req, res) => {
        const list = await StatusCodeModel.find({})
        res.statusCode = 200
        res.send(list)
}

module.exports  = getList