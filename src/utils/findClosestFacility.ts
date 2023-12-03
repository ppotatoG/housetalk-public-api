import { Facility } from '@/types/location';

export const findClosestFacility = (
  facilities: Facility[]
): { closestFacility: Facility | null; minimumDistance: number } => {
  let closestFacility: Facility | null = null;
  let minimumDistance = Infinity;

  facilities.forEach(facility => {
    const distance = Number(facility.distance);
    if (distance && distance < minimumDistance) {
      minimumDistance = distance;
      closestFacility = facility;
    }
  });

  return { closestFacility, minimumDistance };
};
