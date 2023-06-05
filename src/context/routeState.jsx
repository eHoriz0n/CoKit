import { create } from "zustand";
const useRoutingState = create((set) => ({
  whereImIn: "task",

  setWhereImIn: (whereImIn) => {
    set(() => ({ whereImIn: whereImIn }));
  },
}));

export default useRoutingState;
