import Header from "../../components/header";
import PageBodyJ from "../../components/pageBodyJ";

const Journals = () => {
  return (
    <div className="pt-16 px-5 myLg:flex myLg:flex-row myLg:gap-24 myLg:px-16 ">
      <Header />
      <div className="myLg:ms-96">
        <PageBodyJ />
      </div>
    </div>
  );
};

export default Journals;
