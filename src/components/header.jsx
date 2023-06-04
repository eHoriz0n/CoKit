import GetTheDate from "./getTheDate";
import PlusBtn from "./plusButton";
import HeaderTitle from "./headerTitle";
const Header = () => {
  return (
    <div className="bg-myYellow  h-30 ps-4.5 pe-7 pt-6 rounded-2xl mb-12 ">
      <div className="h-14">
        <GetTheDate />
        <HeaderTitle />
      </div>
      <div className="pt-2 flex justify-end">
        <PlusBtn />
      </div>
      {/* <RmBtn /> */}
    </div>
  );
};

export default Header;
