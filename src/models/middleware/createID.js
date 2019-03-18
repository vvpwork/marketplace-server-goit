
const id = require('uniqid');

const addID = schema=>{
    schema.add({
        id: String
    })

    return schema.pre('save', function(next){
        if(!this.id) this.id = id()
        next()
    })
}

module.exports = addID
