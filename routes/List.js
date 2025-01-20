

const StatusCodeModel = require('../models/StatusCodes')

const getList = async (req, res) => {
    const list = await StatusCodeModel.find({})
    console.log('inside the getlist', list)
    res.statusCode = 200
    return res.send({ message: 'sucessfully retrived', data: list })
}

module.exports = getList