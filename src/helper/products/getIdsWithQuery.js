
const getIdsWithQuery = ids =>{
    
    const ArrIds = ids.split(',')
    const numberArrIds = ArrIds.map(r => + r.replace(/\D+/g,""))
    return numberArrIds
}

module.exports = getIdsWithQuery
