/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import GetDate from "../utils/getDate";

const GetTheDate = ({ colorr }) => {
  return (
    <div className="THEtypo-14 " style={{ color: colorr }}>
      {GetDate()}
    </div>
  );
};

export default GetTheDate;
