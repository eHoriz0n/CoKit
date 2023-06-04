/* eslint-disable react/prop-types */
import "./previousBtn.css";
const PrevBtn = ({ TheScale }) => {
  return (
    <div>
      <button
        className=" bg-myBrown bg-no-repeat border-6 border-myFontWhite rounded-full border-solid bg-center w-15 h-15  bg-button-bg3 hover:bg-myDarkYellow  "
        style={{
          width: TheScale || "68px",
          height: TheScale || "68px",
          backgroundSize: (parseInt(TheScale) * 26) / 68 || "26px",
          borderWidth: (parseInt(TheScale) * 6) / 68 || "6px",
        }}
      ></button>
    </div>
  );
};

export default PrevBtn;
