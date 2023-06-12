import "./typography.css";
const HeaderTitle = ({ theType }) => {
  return (
    <div>
      <p className="font-bold THEtypo-777">
        {theType === "Task"
          ? "Any plans ?"
          : theType === "Journal"
          ? "Any ideas ?"
          : "hh"}
      </p>
    </div>
  );
};
export default HeaderTitle;
