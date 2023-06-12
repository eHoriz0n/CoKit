export const usePageAnimation = () => {
  const PageAnimation = {
    Initial: { opacity: 0 },
    inInitial: { opacity: 1 },
    inPagination: { opacity: 0 },
  };
  return { PageAnimation };
};
