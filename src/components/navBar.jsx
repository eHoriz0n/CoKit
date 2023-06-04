import { NavLink } from "react-router-dom";
import "./navBar.css";
const NavBar = ({ TheHeight }) => {
  return (
    <div
      className=" bg-myMateBlack rounded-myround flex justify-between  "
      style={{
        width: "226px",
        height: TheHeight || "73px",
      }}
    >
      <NavLink
        to={"/"}
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#383838" : "transparent",
        })}
        className=" bg-no-repeat rounded-myround  text-xss font-medium pb-3.5 pt-19  w-6/12  h-full  
        bg-button-bg2 text-myFontWhite  "
      >
        Your tasks
      </NavLink>
      <NavLink
        to={"/journals"}
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#383838" : "transparent",
        })}
        className=" bg-no-repeat rounded-myround  text-xss font-medium pb-3.5 pt-19  w-6/12  h-full  
      bg-button-bg1 text-myFontWhite  "
      >
        Your journals
      </NavLink>
    </div>
  );
};

export default NavBar;
