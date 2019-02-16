const qs = require('querystring');

const getIdsWithQuery = (url) =>{
    const query = qs.parse(url.query)
    if(!query.ids) return
    const ArrIds = query.ids.split(',')
    const numberArrIds = ArrIds.map(r => r.replace(/\D+/g,""))
    return numberArrIds
}

module.exports = getIdsWithQuery
