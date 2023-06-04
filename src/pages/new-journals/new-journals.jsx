import GetTheDate from "../../components/getTheDate";
import JournalInputs from "../../components/journal-inputs";
import PlusBtn from "../../components/plusButton";
import RmBtn from "../../components/removeButton";
import "../../components/typography.css";
const NewJournal = () => {
  return (
    <div className="bg-myMateBlack w-full">
      <div className="flex justify-between items-center pt-16 px-9 mb-12">
        <GetTheDate colorr="#FFB800" />
        <RmBtn TheScale={"50px"} />
      </div>
      <div className="flex flex-col items-center px-9 ">
        <JournalInputs />
        <div className="mb-14">
          <PlusBtn TheScale={"50px"} />
        </div>
      </div>
    </div>
  );
};

export default NewJournal;
