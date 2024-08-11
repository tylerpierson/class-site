const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/users')

// Create
router.post('/', userCtrl.create, userCtrl.jsonUser)
// Index
router.get('/', userCtrl.index, userCtrl.jsonUsers)
// Show
router.get('/:id', userCtrl.show, userCtrl.jsonUser)
// Update
router.put('/:id', userCtrl.update, userCtrl.jsonUser)
// Destroy
router.delete('/:id', userCtrl.destroy, userCtrl.jsonUsers)
// Login
router.post('/login', userCtrl.login, userCtrl.jsonUser)


module.exports = router