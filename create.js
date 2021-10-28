const { Article } = require('./models')
const article = require('./models/article')

Article.create({
    title: 'boleh',
    body: 'Hello ipsum',
    approved: true
}).then(article => {
    console.log(article, 'berhasil horee');
})