import "./typography.css";
import useDataStore from "../context/routeState";
import { motion, AnimatePresence } from "framer-motion";
import { useInputAnimation } from "../hooks/animations/pages/inputsAnime";
const DataInputs = ({ theType }) => {
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
  console.log(taskValue);
  const { InputAnimation } = useInputAnimation();
  // const handleDescription = (event) => {
  //   setDescriptionValue(event.target.value);
  // };
  // const handleTask = (event) => {
  //   setTaskValue(event.target.value);
  // };

  // const handleTitle = (event) => {
  //   setTitleValue(event.target.value);
  // };
  return (
    <motion.div
      className="w-full max-w-72 mb-16  myLg:max-w-4444"
      initial={InputAnimation.Initial}
      animate={InputAnimation.inInitial}
      transition={{ duration: 0.2, delay: 0.1 }}
      exit={InputAnimation.inPagination}
    >
      {theType !== "Task" && (
        <div className="mb-7">
          <p className="THEtypo-14 font-medium mb-7 text-myFontWhite ">Title</p>
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            className=" px-4 font-medium block h-12 w-full  max-w-72 bg-myWhite rounded-myround border-none  outline-none "
          />
        </div>
      )}
      <div>
        <p className="THEtypo-14 text-myWhite font-medium mb-7">
          {theType === "Journal" ? "Description" : "Task"}
        </p>
        <textarea
          value={
            theType === "Journal"
              ? descriptionValue
              : theType === "Task"
              ? taskValue
              : null
          }
          onChange={
            theType === "Journal"
              ? (e) => setDescriptionValue(e.target.value)
              : theType === "Task"
              ? (e) => setTaskValue(e.target.value)
              : null
          }
          type="text"
          className="p-4 font-medium block bg-myWhite w-full max-w-72 h-96  rounded-2xl text-start border-none  myLg:max-w-4444 outline-none "
        />
      </div>
    </motion.div>
  );
};

export default DataInputs;
