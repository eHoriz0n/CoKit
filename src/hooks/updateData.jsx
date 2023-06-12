import useDataStore, { useCrudStore } from "../context/routeState";
export const useUpdateData = () => {
  const {
    taskValue,
    setTaskValue,
    titleValue,
    setTitleValue,
    descriptionValue,
    setDescriptionValue,
  } = useDataStore((state) => ({
    taskValue: state.task,
    setTaskValue: state.setTask,
    titleValue: state.title,
    setTitleValue: state.setTitle,
    descriptionValue: state.description,
    setDescriptionValue: state.setDescription,
  }));
  const { theId } = useCrudStore((state) => ({
    theId: state.theId,
  }));
  const journalDataObj = {
    id: theId,
    title: titleValue,
    description: descriptionValue,
  };
  const keysIdT = crypto.randomUUID().toString();
  const taskDataObj = { id: theId, task: taskValue, checked: false };
  // to push data to local storage
  const PushData = (theType) => {
    const keysId = crypto.randomUUID();
    journalDataObj.id = keysId.toString();
    taskDataObj.id = keysId.toString();
    let theStandObj;
    let verfRes = true;
    theType === "Journal"
      ? ((theStandObj = journalDataObj),
        theStandObj.title.trim() === "" && theStandObj.description.trim() === ""
          ? (verfRes = false)
          : "")
      : theType === "Task"
      ? ((theStandObj = taskDataObj),
        theStandObj.task.trim() === "" ? (verfRes = false) : "")
      : null;
    verfRes === false
      ? ""
      : localStorage.setItem(
          `${theType}-${keysId}`,
          JSON.stringify(theStandObj)
        );
    setTaskValue("");
    setTitleValue("");
    setDescriptionValue("");
  };
  // Retrieve values from local storage on component mount
  const PullData = (theType) => {
    const keys = Object.keys(localStorage);
    const filteredKeys = keys.filter((key) => key.startsWith(`${theType}-`));
    const dataObjects = filteredKeys.map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    return dataObjects;
  };
  // update new data to local storage
  const UpdateData = (title, description) => {
    setTitleValue(title);
    setDescriptionValue(description);
  };
  const UpdateDataStorage = (id) => {
    journalDataObj.title.trim() === "" &&
    journalDataObj.description.trim() === ""
      ? localStorage.removeItem(`Journal-${id}`, JSON.stringify(journalDataObj))
      : localStorage.setItem(`Journal-${id}`, JSON.stringify(journalDataObj));
    setTaskValue("");
    setTitleValue("");
    setDescriptionValue("");
  };
  //  deleting data from local storage
  const DeleteData = (id, theType) => {
    let theStandObj;
    theType === "Task"
      ? (theStandObj = taskDataObj)
      : theType === "Journal"
      ? (theStandObj = journalDataObj)
      : "";
    localStorage.removeItem(`${theType}-${id}`, JSON.stringify(theStandObj));
    setTaskValue("");
    setTitleValue("");
    setDescriptionValue("");
  };
  return { PushData, PullData, UpdateData, UpdateDataStorage, DeleteData };
};
