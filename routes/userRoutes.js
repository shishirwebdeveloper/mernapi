const express = require('express');
const {getUser,adduser,getUserById,deleteUser} = require('../controller/userController');

const router = express.Router();

router.get('/getuser',getUser);
router.get('/getuser/:id',getUserById);
router.delete('/deleteuser/:id',deleteUser);
router.post('/adduser',adduser);

module.exports = router;