export const formatRuntime = (mins: number | undefined): number | string => {
  const hours = mins && Math.floor(mins / 60);
  const minutes = mins && mins % 60;
  return hours + 'ч. ' + minutes + 'м.';
};