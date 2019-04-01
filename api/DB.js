var host=process.env.DB_HOST||'localhost'
console.log(host);
module.exports = {
    DB: 'mongodb://'+host+':27017/ng7crud'
 };