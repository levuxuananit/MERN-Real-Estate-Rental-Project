const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Lấy tất cả người dùng
router.get('/', userController.getAllUsers);

// Tạo người dùng mới
router.post('/', userController.createUser);

// Lấy thông tin người dùng theo ID
router.get('/:id', userController.getUserById);

// Cập nhật thông tin người dùng theo ID
router.put('/:id', userController.updateUser);

// Xóa người dùng theo ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
