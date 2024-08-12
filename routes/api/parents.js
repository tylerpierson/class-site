const express = require('express')
const router = express.Router()
const parentCtrl = require('../../controllers/api/parents')

// Create
router.post('/', parentCtrl.create, parentCtrl.jsonParent)
// Index
router.get('/', parentCtrl.index, parentCtrl.jsonParents)
// Show
router.get('/:id', parentCtrl.show, parentCtrl.jsonParent)
// Update
router.put('/:id', parentCtrl.update, parentCtrl.jsonParent)
// Destroy
router.delete('/:id', parentCtrl.destroy, parentCtrl.jsonParents)
// Login
router.post('/login', parentCtrl.login, parentCtrl.jsonParent)


module.exports = router