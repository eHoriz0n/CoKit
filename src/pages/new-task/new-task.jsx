import TasksInput from "../../components/task-inputs";
import "../../components/typography.css";
const NewTask = () => {
  return (
    <div className="bg-myMateBlack w-full">
      <div className="flex justify-end pt-16 px-9 mb-12"></div>
      <div className="flex flex-col items-center px-9 myLg:flex-row myLg:items-start myLg:justify-center ">
        <TasksInput />
        <div className="mb-14 myLg:pt-12 myLg:relative myLg:right-12"></div>
      </div>
    </div>
  );
};

export default NewTask;
