import "./typography.css";
const HeaderTitle = ({ theType }) => {
  return (
    <div>
      <p className="font-bold THEtypo-777">
        {theType === "Task"
          ? "Any plans Today?"
          : theType === "Journal"
          ? "Any thoughts ?"
          : "hh"}
      </p>
    </div>
  );
};

export default HeaderTitle;
