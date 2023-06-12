export const useInputAnimation = () => {
  const InputAnimation = {
    Initial: { x: "-100vw", opacity: 0 },
    inInitial: { x: 0, opacity: 1 },
    inPagination: { x: "-100vw", opacity: 0 },
  };
  return { InputAnimation };
};
