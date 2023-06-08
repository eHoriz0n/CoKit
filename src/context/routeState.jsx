import { create } from "zustand";
const useDataStore = create((set) => ({
  task: "",
  setTask: (task) => {
    set(() => ({ task: task }));
  },
  title: "",
  setTitle: (title) => {
    set(() => ({ title: title }));
  },
  description: "",
  setDescription: (description) => {
    set(() => ({ description: description }));
  },
}));

export default useDataStore;
