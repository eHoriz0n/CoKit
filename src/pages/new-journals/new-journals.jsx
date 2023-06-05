import GetTheDate from "../../components/getTheDate";
import JournalInputs from "../../components/journal-inputs";
import CreateBtn from "../../components/createButton";
import PrevBtn from "../../components/previousBtn";
import "../../components/typography.css";
const NewJournal = () => {
  return (
    <div className="bg-myMateBlack w-full">
      <div className="flex justify-between items-center pt-16 px-9 mb-12 ">
        <GetTheDate colorr="#FFB800" />
        <PrevBtn TheScale={"50px"} />
      </div>
      <div className="flex flex-col items-center px-9 myLg:flex-row myLg:items-start myLg:justify-center  ">
        <JournalInputs />
        <div className="mb-14 myLg:pt-12 myLg:relative myLg:right-12">
          <CreateBtn TheScale={"50px"} TheWork={"Create"} />
        </div>
      </div>
    </div>
  );
};

export default NewJournal;
