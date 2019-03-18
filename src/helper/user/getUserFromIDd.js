const allUsers = require('../../db/users/all-users.json');

const getUserFromid = (id)=>{
    return new Promise((res, rej)=>{
        res(
            allUsers[id] ? allUsers[id]: null
        )
        rej(
          new Error(rej.statusText)
        )
    })
}

module.exports = getUserFromid
