const express = require('express');
const app = express();

app.use('/api/posts', (req, res, next) => {
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
