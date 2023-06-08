import GetTheDate from "../../components/getTheDate";
import "../../components/typography.css";
import "./inspect-journals.css";
import { useParams } from "react-router-dom";
import { useUpdateData } from "../../hooks/updateData";
import { useState } from "react";
import CstBtn from "../../components/cstBtn";

const InspectJournal = () => {
  const { PullData } = useUpdateData();
  const [dataArr, setDataArr] = useState(PullData("Journal"));

  const { id } = useParams();
  const itemDetail = dataArr.filter((item) => item.id === parseInt(id));

  return (
    <div className=" flex flex-col justify-between gap-16 h-full min-h-screen bg-myYellow myLg:px-10  ">
      <div className="flex justify-between items-center pt-16 px-9  ">
        <GetTheDate colorr="#1E1E1E " />
        <CstBtn
          bgImg={"GoBack"}
          onClick={""}
          Btnlabel={""}
          routeto={"/journals"}
        />
      </div>
      <div className=" bg-myMateBlack pt-16 rounded-t-myround1  flex flex-col justify-between pb-2 gap-12 ">
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
            onClick={""}
            Btnlabel={""}
            routeto={"/new-journals"}
          />
          <CstBtn
            bgImg={"Remove"}
            onClick={""}
            Btnlabel={""}
            routeto={"/new-journals"}
          />
        </div>
      </div>
    </div>
  );
};

export default InspectJournal;
