import GetTheDate from "../../components/getTheDate";
import JournalInputs from "../../components/journal-inputs";
import "../../components/typography.css";
const NewJournal = () => {
  return (
    <div className="bg-myMateBlack w-full">
      <div className="flex justify-between items-center pt-16 px-9 mb-12 ">
        <GetTheDate colorr="#FFB800" />
      </div>
      <div className="flex flex-col items-center px-9 myLg:flex-row myLg:items-start myLg:justify-center  ">
        <JournalInputs />
        <div className="mb-14 myLg:pt-12 myLg:relative myLg:right-12"></div>
      </div>
    </div>
  );
};

export default NewJournal;
