import { Request, Response } from 'express';
import { searchNearbyFacilities } from '../services/locationService';

export const findNearbyPlaces = async (req: Request, res: Response) => {
  try {
    const { latitude, longitude } = req.query;
    const places = await searchNearbyFacilities(
      Number(latitude),
      Number(longitude)
    );

    res.json(places);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching nearby places' });
  }
};
