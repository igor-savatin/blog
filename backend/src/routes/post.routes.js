const express = require('express')
const router = express.Router();
const Post = require('../models/post.model')

router.get('/', (req, res) =>{
    Post.findAll((err, post) => {
        if(err)
            res.status(501).send(err)
        res.status(200).send(post)
    })
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id, (err, post) =>{
        if(err)
            res.status(501).send(err)
        res.status(200).send(post)
    })
})

router.post('/', (req, res) => {
    const newPost = new Post(req.body)
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Provide all fields'})
    } else {
        Post.create(newPost, (err, post) => {
            if(err)
                res.status(200).send(err)
            res.json({error: false, message: "Post created!"})
        })
    }
})

router.put('/:id', (req, res) => {
    
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({ error:true, message: 'Provide all fields' })
    } else {
        Post.update(req.params.id, new Post(req.body), (err, post) => {
            if(err){
                res.send(err)}
            res.json({ error:false, message: `Post id: ${req.params.id} successfully updated`})
        })
    }
})

router.delete('/:id', (req, res) => {
    Post.delete(req.params.id, (err, post) => {
        if(err)
            res.send(err)
        res.json({ error:false, message: 'Post successfully deleted'})
    })
})

module.exports = router