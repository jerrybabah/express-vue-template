// var express = require('express');
// var router = express.Router();
// var path = require('path')
import express from 'express';
import path from 'path';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

export default router;
