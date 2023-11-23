export const calculateWalkingTime = (distance: number) => {
  const walkingSpeed = 100;
  return Math.ceil(distance / walkingSpeed);
};
