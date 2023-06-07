import GetTheDate from "../../components/getTheDate";
import DataInputs from "../../components/data-inputs";
import "../../components/typography.css";
import CstBtn from "../../components/cstBtn";
const NewJournal = () => {
  return (
    <div className="bg-myMateBlack w-full">
      <div className="flex justify-between items-center pt-16 px-9 mb-12 ">
        <GetTheDate colorr="#FFB800" />
        <CstBtn onClick={""} bgImg={"GoBack"} routeto={"/"} Btnlabel={""} />
      </div>
      <div className="flex flex-col items-center px-9 myLg:flex-row myLg:items-start myLg:justify-center  ">
        <DataInputs theType={"Journal"} />
        <div className="mb-14 myLg:pt-12 myLg:relative myLg:right-12">
          <CstBtn
            onClick={""}
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
