import GetTheDate from "./getTheDate";
import CstBtn from "./cstBtn";
import HeaderTitle from "./headerTitle";

const Header = () => {
  const handelheader = () => {
    console.log("this function from Header ");
  };

  return (
    <div
      className="bg-myYellow  h-30 ps-4.5 pe-7 pt-6 rounded-2xl mb-12
      myLg:h-HeadMedH myLg:flex
      myLg:flex-col myLg:items-start myLg:justify-between myLg:w-HeadMedW  myLg:fixed   "
    >
      <div className="h-14  myLg:h-1/2 myLg:flex myLg:flex-col myLg:justify-end">
        <GetTheDate />
        <HeaderTitle />
      </div>
      <div className="pt-2 flex justify-end  myLg:pb-4">
        <CstBtn
          onClick={handelheader}
          bgImg={""}
          routeto={"/"}
          Btnlabel={"previous"}
        />
      </div>
      {/* <RmBtn /> */}
    </div>
  );
};

export default Header;
