const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 3000
const postRoutes = require('./backend/src/routes/post.routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api/v1/post', postRoutes)

app.listen(port, () => {
    console.log(`up on port: ${port}`);
})
// GET
// curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/v1/post
// curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/v1/post/1

// POST
// curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "{\"title\":\"Post 1 header\",\"text\":\"Post 1 text\"}" http://localhost:3000/api/v1/post

// PUT
// curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X PUT -d "{\"id\":2,\"title\":\"Post 2 header\",\"text\":\"Post 2 text\"}" http://localhost:3000/api/v1/post/2

// DELETE
// curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/v1/post/1