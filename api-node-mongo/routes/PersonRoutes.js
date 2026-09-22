const router = require('express').Router()
const PersonController = require('../controllers/PersonController')

// CRUD - verbos HTTP correspondem à ação
router.post('/', PersonController.createPerson) // Create
router.get('/', PersonController.getAllPersons) // Read (todas)
router.get('/:id', PersonController.getPersonById) // Read (uma)
router.put('/:id', PersonController.updatePerson) // Update
router.delete('/:id', PersonController.deletePerson) // Delete

module.exports = router
