import GetDate from "../utils/getDate";
// rendering the date from GetDate() function
const GetTheDate = ({ colorr }) => {
  return (
    <div className="THEtypo-14 " style={{ color: colorr }}>
      {GetDate()}
    </div>
  );
};
export default GetTheDate;
