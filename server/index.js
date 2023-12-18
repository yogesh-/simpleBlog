const express = require("express");
const app = express();
const port = 3001;
const db = require("./config/db");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "swfefw35cdfbbdsvvfd";
const AuthenticateToken = require("./utilities/AuthenticateToken");
app.use(express.json());
app.use(cors());

// signup
app.post("/api/signup", (req, res) => {
  const user_name = req.body.user_name;
  const user_email = req.body.user_email;
  const user_pass = bcrypt.hashSync(req.body.user_pass, 10);

  db.query(
    `SELECT * FROM users WHERE userName='${user_name}' OR userEmail='${user_email}'`,
    (err, result) => {
      if (err) {
        res.status(404).send({ message: "something went wrong" });
      } else if (result.length > 0) {
        res.status(403).send({
          message: "user already exists with the given username or email",
        });
      } else {
        try {
          db.query(
            "INSERT INTO users(userName,userEmail,userPassword) VALUES (?,?,?)",
            [user_name, user_email, user_pass],
            (err, result) => {
              if (err) {
                res
                  .status(404)
                  .send({ message: "Could not create the user, try again" });
              } else {
                const token = jwt.sign(req.query, JWT_SECRET, {
                  expiresIn: "7d",
                });
                res.status(200).send({
                  accessToken: token,
                  message: "user created successfully",
                });
                // send jwt token
              }
            }
          );
        } catch (error) {
          res.status(500).send(error);
        }
      }
    }
  );
});

// Login
app.post("/api/login", (req, res) => {
  const user_pass = req.body.user_pass;
  db.query(
    `SELECT * FROM users WHERE userName = '${req.body.user_name}'`,
    (err, result) => {
      if (err) {
        res.status(500).send({ message: "User not Found" });
      } else if (result.length === 0) {
        res.status(404).send({ message: "User not Found2" });
      } else {
        const hashedPass = result[0].userPassword;
        const passwordMatches = bcrypt.compareSync(user_pass, hashedPass);
        if (passwordMatches) {
          // if password matches then send a jwt token
          const token = jwt.sign(req.query, JWT_SECRET, { expiresIn: "7d" });
          res.status(200).send({
            user_name: req.body.user_name,
            accessToken: token,
            message: "user logged in successfully",
          });
        } else {
          res.status(401).send({ message: "Incorrect password" });
        }
      }
    }
  );
});

// get all the blog post data
app.get("/api/get-blog", AuthenticateToken, (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// create a new post
app.post("/api/create", AuthenticateToken, (req, res) => {
  const title = req.body.blogTitle;
  const blog = req.body.blogPost;
  const user = req.body.user;
  db.query(
    "INSERT INTO posts (title,post_text,user_name) VALUES (?,?,?)",
    [title, blog, user],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send(result);
    }
  );
});

// get a post by id
app.get("/api/post/:id", AuthenticateToken, (req, res) => {
  const postId = req.params.id;
  // console.log(postId)
  db.query("SELECT * FROM posts WHERE id=?", postId, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(result);
  });
});

// get user's profile photo

app.get("/api/user/photo/:userName", AuthenticateToken, (req, res) => {
  const userName = req.params.userName;

  db.query(
    "SELECT userPhoto FROM users WHERE userName=?",
    userName,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send(result);
    }
  );
});

// get user's posts

app.get("/api/user/posts/:userName", AuthenticateToken, (req, res) => {
  const userName = req.params.userName;

  db.query(
    "SELECT id, title, post_text, user_name, date_posted, likes FROM posts WHERE user_name = ?",
    userName,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send(result);
    }
  );
});

// Update like
app.put(
  "/api/update-like/:like_value/:user_id",
  AuthenticateToken,
  (req, res) => {
    const user = req.params.user_id;
    const post_like = req.params.like_value;

    db.query(
      "UPDATE posts SET `likes`=? WHERE id=?",
      [post_like, user],
      (err, result) => {
        if (err) {
          console.log(err, "from backend update liker");
        }
        res.status(200).send(result);
      }
    );
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
