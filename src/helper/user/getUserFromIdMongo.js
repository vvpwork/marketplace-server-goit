

const getUserFromId = (schema, id) =>{
    return schema.findById(id)
}

module.exports = getUserFromId
