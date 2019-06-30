const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb://localhost:27017/course-app-db', {
  useNewUrlParser: true
}).then(() => console.log('Connected to MongoDB!'))
  .catch(() => console.log('Connection to MongoDB failed!'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'obn03ujb0q', title: 'First server-side post', content: 'This is coming from server'},
    { id: 'onawd90kww', title: 'Second server-side post', content: 'This is coming from server!'},
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  })
});

module.exports = app;
