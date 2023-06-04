import GetTheDate from "../../components/getTheDate";
import PlusBtn from "../../components/plusButton";
import PrevBtn from "../../components/previousBtn";
import RmBtn from "../../components/removeButton";
import "../../components/typography.css";

const InspectTask = () => {
  return (
    <div className="flex flex-col bg-myYellow ">
      <div className="flex justify-between items-center pt-16 px-9 mb-12 ">
        <GetTheDate colorr="#1E1E1E" />
        <PrevBtn TheScale={"50px"} />
      </div>
      <div className="bg-myMateBlack  pt-16 h-full rounded-t-myround1 ">
        <div className="px-10">
          <div className="mb-7 flex justify-between">
            <p className="text-myDarkYellow THEtypo-14">23 ,june 2023</p>
            <p className="text-myDarkYellow THEtypo-14">18:23</p>
          </div>
          <p className="font-medium THEtypo-xxl mb-7 text-myFontWhite">Title</p>
          <p className="font-medium THEtypo-xs1 text-myFontWhite mb-16 h-full min-h-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            repudiandae velit distinctio, aspernatur ut dignissimos! Soluta
            expedita, ea saepe, inventore reprehenderit autem nobis hic facilis,
            tempora voluptatem ullam voluptatibus deserunt!
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

export default InspectTask;
