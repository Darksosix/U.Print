const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Route สำหรับการลงทะเบียน
router.post('/register', register);

// Route สำหรับการเข้าสู่ระบบ
router.post('/login', login);

module.exports = router;
