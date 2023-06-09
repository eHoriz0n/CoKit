import { useState } from "react";
import "./oneTask.css";
import "./typography.css";
import CstBtn from "./cstBtn";
import { useUpdateData } from "../hooks/updateData";

const OneTask = ({ label, id, setDataArr }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { DeleteData, PullData } = useUpdateData();
  const hhh = PullData("Task");
  console.log("this is hhh " + hhh);
  return (
    <label className="bg-myMateBlack text-myFontWhite rounded-2xl py-4 sm:w-fit THEtypo-14 w-full flex items-center gap-4 px-4 cursor-pointer ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        className={`appearance-none h-4 w-4 rounded-full cursor-pointer border-2 border-myBrown checked:bg-slate-200`}
      />
      <span
        className={` break-all flex-1 ${
          isChecked ? "line-through text-myBrown" : ""
        }`}
      >
        {label}
      </span>
      <CstBtn
        routeto={"/"}
        onClick={() => {
          DeleteData(id, "Task");
          setDataArr((prev) => prev.filter((task) => task.id !== id));
        }}
        bgImg={"Remove1"}
        Btnlabel={""}
      />
    </label>
  );
};
export default OneTask;
