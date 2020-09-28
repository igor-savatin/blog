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