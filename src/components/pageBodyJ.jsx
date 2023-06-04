import OneJournal from "./oneJournal";
import "./typography.css";

const PageBodyJ = () => {
  return (
    <div className=" ">
      <p className="font-bold THEtypo-MyXl mb-4 ">Your Journals</p>
      {/* it will be a loop to create journal Component */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-6 w-full max-w-444 mb-12">
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
          <OneJournal />
        </div>
      </div>
    </div>
  );
};

export default PageBodyJ;
