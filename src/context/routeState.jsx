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
  checked: false,
  setChecked: (checked) => {
    set(() => ({ checked: checked }));
  },
  dataArray: [],
  setDataArray: (dataArray) => {
    set(() => ({ dataArray: dataArray }));
  },
}));
export const useCrudStore = create((set) => ({
  verify: false,

  setVerify: (verify) => {
    set(() => ({ verify: verify }));
  },
  theId: "",
  setTheId: (theId) => {
    set(() => ({ theId: theId }));
  },
}));
export default useDataStore;
