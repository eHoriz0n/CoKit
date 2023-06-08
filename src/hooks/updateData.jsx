import { useEffect } from "react";
import useDataStore from "../context/routeState";

export const useUpdateData = () => {
  const {
    taskValue,

    titleValue,

    descriptionValue,
  } = useDataStore((state) => ({
    taskValue: state.task,
    setTaskValue: state.setTask,
    titleValue: state.title,
    setTitleValue: state.setTitle,
    descriptionValue: state.description,
    setDescriptionValue: state.setDescription,
  }));
  const keysId = localStorage.length;
  const journalDataObj = {
    id: keysId,
    title: titleValue,
    description: descriptionValue,
  };
  const taskDataObj = { task: taskValue };
  const PushData = (theType) => {
    // Update local storage with input values

    localStorage.setItem(
      `${theType}-${keysId}`,
      JSON.stringify(
        theType === "Task"
          ? taskDataObj
          : theType === "Journal"
          ? journalDataObj
          : null
      )
    );

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

  return { PushData, PullData };
};
