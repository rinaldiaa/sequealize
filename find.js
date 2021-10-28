const { Article } = require('./models')

Article.findAll().then(data => {
    console.log(data)
})

// const query = {
//     where: {
//         id: 1
//     }
// }
  


Article.findOne({
    where: {
        id: 1
    }
}).then(data => console.log(data))