import OneJournal from "./oneJournal";
import OneTask from "./onetask";
import "./typography.css";

const PageBody = ({ theType }) => {
  return (
    <div>
      <p className="font-bold THEtypo-MyXl mb-4">Your {theType}s</p>
      {/* it will be a loop to create journal Component */}

      <div className="flex  sm:flex-wrap sm:flex-row gap-4 flex-nowrap flex-col ">
        {theType === "Task" ? (
          <OneTask />
        ) : theType === "Journal" ? (
          <OneJournal />
        ) : null}
      </div>
    </div>
  );
};

export default PageBody;
