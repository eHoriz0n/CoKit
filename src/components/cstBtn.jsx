import { NavLink } from "react-router-dom";
import "./cstBtn.css";
const CstBtn = ({ routeto, onClick, bgImg, Btnlabel }) => {
  return (
    <div>
      <NavLink to={routeto}>
        <button
          onClick={onClick}
          className={`bg-myBrown bg-no-repeat THEtypo-14 border-6 border-myFontWhite
        rounded-full border-solid bg-center ${Btnlabel !== "" ? "h-e15" : ""} ${
            bgImg === "Remove1" ? "border-none flex-1 bg-transparent" : ""
          } px-4 
          bg-button-${bgImg}
        hover:bg-myDarkYellow  flex items-center leading-none text-myFontWhite justify-center gap-2 font-medium`}
        >
          {Btnlabel}
        </button>
      </NavLink>
    </div>
  );
};
export default CstBtn;
