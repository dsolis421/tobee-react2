//tried to establish routes for call to petfinder.  this code is not in use
import express from 'express';
import PetController from '../controllers/PetController';

const router = express.Router();

router.get('/api/pet-shelters/:_zip', PetController.listShelters);

export default router;
