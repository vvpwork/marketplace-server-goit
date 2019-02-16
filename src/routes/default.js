
const defaultRout = (req, res)=>{
    res.writeHead(200, {"content-type":"row"});
    res.write("не правельный url попробуй еще");
    res.end()
}


module.exports = defaultRout
