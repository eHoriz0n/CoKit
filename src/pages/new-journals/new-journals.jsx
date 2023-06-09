import GetTheDate from "../../components/getTheDate";
import DataInputs from "../../components/data-inputs";
import "../../components/typography.css";
import CstBtn from "../../components/cstBtn";
import { useUpdateData } from "../../hooks/updateData";
import { useCrudStore } from "../../context/routeState";
import { useParams } from "react-router-dom";

const NewJournal = () => {
  const { id } = useParams();
  console.log("the New journal id " + id);
  const { PushData, UpdateDataStorage } = useUpdateData();
  return (
    <div className="bg-myMateBlack min-h-screen w-full">
      <div className="flex justify-between items-center pt-16 px-9 mb-6 ">
        <GetTheDate colorr="#FFB800" />
        <CstBtn
          onClick={""}
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
    </div>
  );
};

export default NewJournal;
