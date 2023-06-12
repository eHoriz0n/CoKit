import GetTheDate from "./getTheDate";
import CstBtn from "./cstBtn";
import HeaderTitle from "./headerTitle";
const Header = ({ thePlace }) => {
  return (
    <div
      className="bg-myYellow  h-48 mysLg:h-36 myLg3:h-30  ps-4.5 pe-7   rounded-2xl mb-12
      myLg:h-3/4 flex justify-between
      myLg:flex-col myLg:items-start myLg:justify-between myLg:w-1/4  myLg:fixed   "
    >
      <div className=" pt-6 mb-6 myLg:h-1/2 myLg:flex myLg:flex-col myLg:justify-end">
        <GetTheDate />
        <HeaderTitle theType={thePlace} />
      </div>
      <div className=" flex flex-col items-end justify-between gap-32 mysLg:gap-20 myLg3:gap-14 myLg:flex-row myLg:-mb-8">
        <div className="-mt-6">
          <CstBtn
            onClick={() => {}}
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
          onClick={() => {}}
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
    </div>
  );
};
export default Header;
