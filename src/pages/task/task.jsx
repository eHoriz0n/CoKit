import Header from "../../components/header";
import PageBody from "../../components/pageBody";

const Task = () => {
  return (
    <div className="pt-16 px-5  myLg:flex myLg:flex-row myLg:gap-24 myLg:px-16 ">
      <Header thePlace={"Task"} />
      <div className="myLg:ms-def">
        <PageBody theType={"Task"} />
      </div>
    </div>
  );
};

export default Task;
