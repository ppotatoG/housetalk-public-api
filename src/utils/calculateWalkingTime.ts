export const calculateWalkingDistance = (
  distance: number
): 5 | 10 | 15 | 20 | null => {
  if (distance <= 500) return 5;
  if (distance <= 1000) return 10;
  if (distance <= 1500) return 15;
  if (distance <= 2000) return 20;
  return null;
};
