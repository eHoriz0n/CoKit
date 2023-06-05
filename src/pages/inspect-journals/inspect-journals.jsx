import GetTheDate from "../../components/getTheDate";
import PlusBtn from "../../components/plusButton";
import PrevBtn from "../../components/previousBtn";
import RmBtn from "../../components/removeButton";
import "../../components/typography.css";

const InspectJournal = () => {
  return (
    <div className="flex flex-col h-screen bg-myYellow myLg:px-10 ">
      <div className="flex justify-between items-center pt-16 px-9 mb-12 ">
        <GetTheDate colorr="#1E1E1E" />
        <PrevBtn TheScale={"50px"} />
      </div>
      <div className="bg-myMateBlack  pt-16 h-full rounded-t-myround1 flex flex-col justify-between">
        <div className="px-10 ">
          <p className="font-medium THEtypo-xxl mb-7 text-myFontWhite">Title</p>
          <p className="font-medium THEtypo-xs1 text-myFontWhite mb-16  min-h-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            repudiandae velit distinctio, aspernatur ut dignissimos! Soluta
            expedita, ea saepe, inventore reprehenderit autem nobis hic facilis,
            tempora voluptatem ullam voluptatibus deserunt! Lorem ipsum dolor
          </p>
        </div>
        <div className="mb-14  flex justify-center items-end gap-3">
          <PlusBtn TheScale={"50px"} />
          <RmBtn TheScale={"50px"} />
        </div>
      </div>
    </div>
  );
};

export default InspectJournal;
