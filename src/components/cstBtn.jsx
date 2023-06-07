/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./cstBtn.css";

const CstBtn = ({ routeto, onClick, bgImg, Btnlabel }) => {
  return (
    <div>
      <NavLink to={routeto}>
        <button
          onClick={onClick}
          className={`bg-myBrown bg-no-repeat border-6 border-myFontWhite
        rounded-full border-solid bg-center h-15 px-3 bg-button-${bgImg}
        hover:bg-myDarkYellow  flex items-center justify-center gap-2 font-medium`}
        >
          {Btnlabel}
          {Btnlabel !== "" && (
            <div className="bg-button-Navigate w-8 h-8 bg-no-repeat bg-center"></div>
          )}
        </button>
      </NavLink>
    </div>
  );
};

export default CstBtn;
