import Header from "../../components/header";
import PageBodyT from "../../components/pageBodyT";

const Task = () => {
  return (
    <div className="pt-16 px-5  myLg:flex myLg:flex-row myLg:gap-24 myLg:px-16 ">
      <Header />
      <div className="myLg:ms-96">
        <PageBodyT />
      </div>
    </div>
  );
};

export default Task;
