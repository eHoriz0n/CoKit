import { useState } from "react";
import "./oneTask.css";
import "./typography.css";
import CstBtn from "./cstBtn";

const OneTask = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="bg-myMateBlack text-myFontWhite rounded-2xl py-4 sm:w-fit THEtypo-14 w-full flex items-center gap-4 px-4 cursor-pointer ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        className={`appearance-none h-4 w-4 rounded-full cursor-pointer border-2 border-myBrown checked:bg-slate-200`}
      />
      <span
        className={`flex-1 ${isChecked ? "line-through text-myBrown" : ""}`}
      >
        {label}
      </span>
      <CstBtn routeto={"/"} onClick={""} bgImg={"Remove1"} Btnlabel={""} />
    </label>
  );
};

export default OneTask;
