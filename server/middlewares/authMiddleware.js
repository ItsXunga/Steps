const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function authenticateToken(req, res, next) {
  const { authorization } = req.headers;
  if (req.user) next();

  const token =
    authorization &&
    authorization.split(' ')[0] === 'Bearer' &&
    authorization.split(' ')[1];

  if (token == null) next();

  jwt.verify(token, process.env.SECRET, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
};
