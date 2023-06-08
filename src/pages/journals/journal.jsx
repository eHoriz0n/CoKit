import Header from "../../components/header";
import PageBody from "../../components/pageBody";

const Journal = () => {
  return (
    <div className="pt-16 px-5 myLg:flex myLg:flex-row myLg:gap-24 myLg:px-16 ">
      <Header thePlace={"Journal"} />
      <div className="myLg:ms-def">
        <PageBody theType={"Journal"} />
      </div>
    </div>
  );
};

export default Journal;
