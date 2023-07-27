const express = require('express')
const app = express()
const port = 3001
const db = require('./config/db')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// get all the blog post data
app.get('/api/get-blog', (req, res) => {
  db.query('SELECT * FROM posts',(err,result)=>{
    if(err){
      console.log(err)
    }
    res.send(result)
  })
});

// create a new post
app.post('/api/create',(req,res)=>{

  const title = req.body.blogTitle;
  const blog = req.body.blogPost;
  const user = req.body.user
    db.query("INSERT INTO posts (title,post_text,user_name) VALUES (?,?,?)",[title,blog,user],(err,result)=>{
      if(err){
        console.log(err)
      }
      res.status(200).send(result)
    })
})

// get a post by id
app.get('/api/post/:id',(req,res)=>{
  const postId = req.params.id;
  // console.log(postId)
db.query("SELECT * FROM posts WHERE id=?",postId,(err,result)=>{
  if(err){
    console.log(err)
  }
  res.status(200).send(result)
})
})

// Update like
app.get('/api/update-like/:like_value/:user_id',(req,res)=>{
  const user = req.params.user_id;
  const post_like = req.params.like_value;
  db.query('UPDATE posts SET `likes`=? WHERE id=?',[post_like,user])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})