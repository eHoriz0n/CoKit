import PlusBtn from "../../components/plusButton";
import PrevBtn from "../../components/previousBtn";
import TasksInput from "../../components/task-inputs";
import "../../components/typography.css";
const NewTask = () => {
  return (
    <div className="bg-myMateBlack w-full">
      <div className="flex justify-end pt-16 px-9 mb-12">
        <PrevBtn TheScale={"50px"} />
      </div>
      <div className="flex flex-col items-center px-9 myLg:flex-row myLg:items-start myLg:justify-center ">
        <TasksInput />
        <div className="mb-14 myLg:pt-12 myLg:relative myLg:right-12">
          <PlusBtn TheScale={"50px"} />
        </div>
      </div>
    </div>
  );
};

export default NewTask;
