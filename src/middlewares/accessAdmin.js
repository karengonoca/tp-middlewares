let admin = ['Greta','Ada','Vim','Tim'];

module.exports = (req, res, next)=>{
    if(admin.includes(req.query.user)){
        next()
    }else{
        res.redirect('/noAccess')
    }
}