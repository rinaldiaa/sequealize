const express = require('express')
const app = express()
const port = 9000

const { Article } = require('./models')
const article = require('./models/article')


app.use(express.json())

// get all articles
app.get('/articles', (req, res) => {
    Article.findAll()
    .then(article =>  {
        res.status(200).json(article)
    })
})

// get article by id
app.get('/articles', (req, res) => {
    Article.findOne({
        where: { id: req.params.id}
    })
    .then(article => {
        res.status(200).json(article)
    })
})


// create article
// Create Article
app.post('/articles', (req, res) => {
    Article.create({
     title: req.body.title,
     body: req.body.body,
     approved: req.body.approved
   })
   .then(article => {
    res.status(201).json(article)
   }).catch(err => {
    res.status(422).json("Can't create article")
   })
   })
// update article
app.put('/articles/:id', (req, res) => {
    Article.update({
    title: req.body.title,
    body: req.body.body,
    approved: req.body.approved
    }, {
    where: { id: req.params.id }
    })
    .then(article => {
    res.status(201).json(article)
    }) .catch(err => {
    res.status(422).json("Can't create article")
    })
    })
// Delete Article by id
app.delete('/articles/:id', (req, res) => {
    Article.destroy({
    where: { id: req.params.id }
   })
   .then(article => {
    res.status(201).json(article)
   }).catch(err => {
    res.status(422).json("Can't delete article")
   })
   })
   
   app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
   })