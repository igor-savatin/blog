`use strict`

const dbConnection = require('../../config/db.config');
const bodyParser = require('body-parser')

const Post = function(postItem){
    this.id = postItem.id,
    this.title = postItem.title,
    this.text = postItem.text
}

Post.findAll = (result) => {
    dbConnection.query('select * from post', (err, res) => {
        if (err) {
            result(err,null)
        } else {
            result(null,res)
        }
    })
}

Post.findById = (id, result) =>{
    dbConnection.query('select * from post where id=?', id, (err, res) => {
        if (err) {
            result(err,null)
        } else {
            result(null,res)
        }
    })
}

Post.create =(newPost, result) => {
    dbConnection.query('insert into post set ?',newPost, (err, res) =>{
        if (err) {
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Post.update = (id, post, result) =>{
    dbConnection.query('update post set title=?,text=? where id=?',
    [post.title,post.text,post.id],
    (err, res) => {
        if (err) {
            result(err,null)
        } else {
            result(null,res)
        }
    })
}

Post.delete = (id, result) => {
    dbConnection.query('delete from post where id = ?',
    [id],
    (err, res) => {
        if (err) {
            result(err,null)
        } else {
            result(null,res)
        }
    })
}

module.exports = Post