export const useInspectAnimation = () => {
  const InspectAnimation = {
    Initial: { opacity: 0 },
    inInitial: { opacity: 1 },
    inPagination: { opacity: 0 },
    childInitial: { opacity: 0, height: 100 },
    childinInitial: { opacity: 1, height: "auto" },
    childinPagination: { opacity: 0, height: 0 },
  };
  return { InspectAnimation };
};
