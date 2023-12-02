import express from 'express';
import { findNearbyPlaces } from '@/controllers/locationController';

const router = express.Router();

router.get('/nearby-places', findNearbyPlaces);

export default router;
