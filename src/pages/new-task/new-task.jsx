import PlusBtn from "../../components/plusButton";
import RmBtn from "../../components/removeButton";
import TasksInput from "../../components/task-inputs";
import "../../components/typography.css";
const NewTask = () => {
  return (
    <div className="bg-myMateBlack w-full">
      <div className="flex justify-end pt-16 px-9 mb-12">
        <RmBtn TheScale={"50px"} />
      </div>
      <div className="flex flex-col items-center px-9 ">
        <TasksInput />
        <div className="mb-14">
          <PlusBtn />
        </div>
      </div>
    </div>
  );
};

export default NewTask;
