const express = require('express');
const router = express.Router();
const { getHomePage } = require('../controllers/homeController');

// Route สำหรับหน้าเว็บหลัก
router.get('/', getHomePage);

module.exports = router;
