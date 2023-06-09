import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useUpdateData } from "../hooks/updateData";
import OneJournal from "./oneJournal";
import OneTask from "./onetask";
import "./typography.css";
const PageBody = ({ theType }) => {
  const { PullData } = useUpdateData();
  const [dataArr, setDataArr] = useState(PullData(theType));

  // const newData = PullData(theType);
  // setDataArr((dataArr) => [...dataArr, newData]);
  return (
    <div>
      <p className="font-bold THEtypo-MyXl mb-4">Your {theType}s</p>
      {/* it will be a loop to create journal Component */}
      <div className="flex  sm:flex-wrap sm:flex-row gap-4 flex-nowrap flex-col ">
        {theType === "Task"
          ? dataArr.map((task) => {
              // eslint-disable-next-line react/jsx-key
              return task.task === "" ? null : (
                <OneTask
                  label={task.task}
                  id={task.id}
                  setDataArr={setDataArr}
                />
              );
            })
          : theType === "Journal"
          ? dataArr.map((journal) => {
              return journal.title === "" &&
                journal.description === "" ? null : (
                <OneJournal
                  id={journal.id}
                  title={journal.title}
                  description={journal.description}
                  setDataArr={setDataArr}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default PageBody;
