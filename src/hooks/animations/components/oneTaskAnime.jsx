export const useOneTaskAnimation = () => {
  const singleTaskAnimation = {
    inHover: { borderRadius: "8px" },
    inRemove: { scale: 0.9, opacity: 0 },
  };
  return { singleTaskAnimation };
};
