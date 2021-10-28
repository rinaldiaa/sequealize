const { Article } = require('./models')

const query = {
    where: {
        id: 1
    }
}

Article.update({
approved: false
}, query).then(() => {
    console.log('berhasil');
    process.exit()
}).catch(err => {
    console.log(err, 'error bos');
})