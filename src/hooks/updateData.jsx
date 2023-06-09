import { useEffect } from "react";
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
    id: parseInt(theId),
    title: titleValue,
    description: descriptionValue,
  };
  const taskDataObj = { id: parseInt(theId), task: taskValue };
  console.log("object data " + taskDataObj.task);
  const PushData = (theType) => {
    const keysId = localStorage.length;
    journalDataObj.id = keysId;
    taskDataObj.id = keysId;
    let theStandObj;
    let verfRes = true;
    // Update local storage with input values
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

    // ... other input values
  };
  const PullData = (theType) => {
    // Retrieve values from local storage on component mount

    const keys = Object.keys(localStorage);
    const filteredKeys = keys.filter((key) => key.startsWith(`${theType}-`));
    const dataObjects = filteredKeys.map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    return dataObjects;

    // ... other input values
  };
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
