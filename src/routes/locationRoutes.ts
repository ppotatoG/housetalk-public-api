import express from 'express';
import { findNearbyPlaces } from '../controllers/locationController';

const router = express.Router();

router.post('/nearby-places', findNearbyPlaces);

export default router;
