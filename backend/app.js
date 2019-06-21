const express = require('express');
const app = express();

app.use((rqe, res, next) => {
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
