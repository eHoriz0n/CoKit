import GetTheDate from "./getTheDate";
import CstBtn from "./cstBtn";
import HeaderTitle from "./headerTitle";

// Rest of your component code...

const Header = ({ thePlace }) => {
  const handelheader = () => {
    console.log("this function from Header ");
  };

  return (
    <div
      className="bg-myYellow  h-30 ps-4.5 pe-7  rounded-2xl mb-12
      myLg:h-3/4 flex justify-between
      myLg:flex-col myLg:items-start myLg:justify-between myLg:w-1/4  myLg:fixed   "
    >
      <div className="h-14 pt-6  myLg:h-1/2 myLg:flex myLg:flex-col myLg:justify-end">
        <GetTheDate />
        <HeaderTitle theType={thePlace} />
      </div>
      <div className=" flex flex-col items-end justify-between  gap-14 myLg:flex-row myLg:-mb-8">
        <div className="-mt-6">
          <CstBtn
            onClick={handelheader}
            bgImg={""}
            routeto={
              thePlace === "Task"
                ? "/journals"
                : thePlace === "Journal"
                ? "/"
                : null
            }
            Btnlabel={
              thePlace === "Task"
                ? "view Journals"
                : thePlace === "Journal"
                ? "view Tasks"
                : null
            }
          />
        </div>
        <CstBtn
          onClick={handelheader}
          bgImg={"Add"}
          routeto={
            thePlace === "Task"
              ? "/new-tasks"
              : thePlace === "Journal"
              ? "/new-journals"
              : null
          }
          Btnlabel={""}
        />
      </div>
      {/* <RmBtn /> */}
    </div>
  );
};

export default Header;
