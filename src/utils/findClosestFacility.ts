import { Facility } from '@/types/location';

interface FindClosestFacilityType {
  closestFacility: Facility | null;
  minimumDistance: number;
}

export const findClosestFacility = (
  facilities: Facility[]
): FindClosestFacilityType => {
  return facilities.reduce<FindClosestFacilityType>(
    (closest, facility) => {
      const distance =
        facility.distance !== null ? Number(facility.distance) : Infinity;
      if (distance < closest.minimumDistance) {
        return { closestFacility: facility, minimumDistance: distance };
      }
      return closest;
    },
    { closestFacility: null, minimumDistance: Infinity }
  );
};
