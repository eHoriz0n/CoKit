import { useEffect, useState } from "react";
import "./typography.css";
import CstBtn from "./cstBtn";
import { useUpdateData } from "../hooks/updateData";
import { motion } from "framer-motion";
import { useOneTaskAnimation } from "../hooks/animations/components/oneTaskAnime";
const OneTask = ({ label, id, setDataArr }) => {
  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.getItem(`Task-${id}`)).checked
      ? JSON.parse(localStorage.getItem(`Task-${id}`)).checked
      : ""
  );
  const { DeleteData } = useUpdateData();
  const { singleTaskAnimation } = useOneTaskAnimation();
  const [isDeleted, setIsDeleted] = useState(false);
  const stagedTask = { id: id, task: label, checked: isChecked };
  useEffect(() => {
    localStorage.setItem(`Task-${id}`, JSON.stringify(stagedTask));
  }, [isChecked]);
  return (
    <motion.div
      variants={singleTaskAnimation}
      initial={{ scale: 1 }}
      animate={isDeleted === true ? singleTaskAnimation.inRemove : { scale: 1 }}
      whileHover={singleTaskAnimation.inHover}
      className="bg-myMateBlack text-myFontWhite rounded-2xl py-4 sm:w-fit THEtypo-14 w-full flex items-center gap-4 px-4 cursor-pointer "
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
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
          setIsDeleted(!isDeleted);
          setTimeout(() => {
            DeleteData(id, "Task");
            setDataArr((prev) => prev.filter((task) => task.id !== id));
          }, 500);
        }}
        bgImg={"Remove1"}
        Btnlabel={""}
      />
    </motion.div>
  );
};
export default OneTask;
