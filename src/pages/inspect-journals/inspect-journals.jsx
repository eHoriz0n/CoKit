import GetTheDate from "../../components/getTheDate";
import "../../components/typography.css";
import "./inspect-journals.css";
import { useParams } from "react-router-dom";
import { useUpdateData } from "../../hooks/updateData";
import { useEffect, useState } from "react";
import CstBtn from "../../components/cstBtn";
import { useCrudStore } from "../../context/routeState";
import { useInspectAnimation } from "../../hooks/animations/pages/inspectAnime";
import { motion, AnimatePresence } from "framer-motion";

const InspectJournal = () => {
  const { theId, setTheId, verify, setVerify } = useCrudStore((state) => ({
    theId: state.theId,
    setTheId: state.setTheId,
  }));
  const { PullData, UpdateData, DeleteData } = useUpdateData();
  const [dataArr, setDataArr] = useState(PullData("Journal"));

  const { id } = useParams();
  const itemDetail = dataArr.filter(
    (item) => item.id.toString() === id.toString()
  );
  useEffect(() => {
    setTheId(id.toString());
  }, []);

  console.log("im workiiiiiiiiiiiing");
  const { InspectAnimation } = useInspectAnimation();
  return (
    <motion.div
      initial={InspectAnimation.Initial}
      animate={InspectAnimation.inInitial}
      exit={InspectAnimation.inPagination}
      className=" flex flex-col justify-between gap-16 h-full min-h-screen bg-myYellow myLg:px-10  "
    >
      <div className="flex justify-between items-center pt-16 px-9  ">
        <GetTheDate colorr="#1E1E1E " />
        <CstBtn
          bgImg={"GoBack"}
          onClick={""}
          Btnlabel={""}
          routeto={"/journals"}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={InspectAnimation.childInitial}
          animate={InspectAnimation.childinInitial}
          exit={InspectAnimation.childinPagination}
          className=" bg-myMateBlack pt-16 rounded-t-myround1  flex flex-col justify-between pb-2 gap-12 "
        >
          <div className="px-10  ">
            <p className="font-medium THEtypo-xxl mb-7 text-myFontWhite">
              {itemDetail[0].title}
            </p>
            <p className="font-medium THEtypo-xs1 text-myFontWhite mb-16   ">
              {itemDetail[0].description}
            </p>
          </div>
          <div className="pb-14  flex justify-center items-end gap-4 ">
            <CstBtn
              bgImg={"Add"}
              onClick={() =>
                UpdateData(itemDetail[0].title, itemDetail[0].description)
              }
              Btnlabel={""}
              routeto={`/new-journals/${theId}`}
            />
            <CstBtn
              bgImg={"Remove"}
              onClick={() => DeleteData(id.toString(), "Journal")}
              Btnlabel={""}
              routeto={"/journals"}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default InspectJournal;
