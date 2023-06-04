/* eslint-disable react/prop-types */
const RmBtn = ({ TheScale }) => {
  return (
    <div>
      <button
        className="bg-myBrown bg-no-repeat 
          border-myFontWhite
           rounded-full border-solid bg-center w-15 h-15 rotate-45
           bg-button-bg hover:bg-myDarkYellow"
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

export default RmBtn;
