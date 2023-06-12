import GetTheDate from "../../components/getTheDate";
import DataInputs from "../../components/data-inputs";
import "../../components/typography.css";
import CstBtn from "../../components/cstBtn";
import { useUpdateData } from "../../hooks/updateData";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInputAnimation } from "../../hooks/animations/pages/inputsAnime";
const NewJournal = () => {
  const { id } = useParams();
  const { PushData, UpdateDataStorage } = useUpdateData();
  const { InputAnimation } = useInputAnimation();
  return (
    <motion.div
      className="bg-myMateBlack min-h-screen w-full"
      initial={InputAnimation.Initial}
      animate={InputAnimation.inInitial}
      transition={{ duration: 0.2 }}
      exit={InputAnimation.inPagination}
    >
      <div className="flex justify-between items-center pt-16 px-9 mb-6 ">
        <GetTheDate colorr="#FFB800" />
        <CstBtn
          onClick={() => {}}
          bgImg={"GoBack"}
          routeto={"/journals"}
          Btnlabel={""}
        />
      </div>
      <div className="flex flex-col items-center px-9 myLg:flex-row myLg:items-start myLg:justify-center  ">
        <DataInputs theType={"Journal"} />
        <div className="mb-14 myLg:pt-12 myLg:relative myLg:right-12">
          <CstBtn
            onClick={
              id === undefined
                ? () => PushData("Journal")
                : () => UpdateDataStorage(id)
            }
            bgImg={"Add"}
            routeto={"/journals"}
            Btnlabel={""}
          />
        </div>
      </div>
    </motion.div>
  );
};
export default NewJournal;
