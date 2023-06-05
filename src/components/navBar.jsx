import { NavLink, useLocation } from "react-router-dom";
import "./navBar.css";
import useRoutingState from "../context/routeState";

const NavBar = ({ TheHeight }) => {
  const location = useLocation();
  const isHidden =
    location.pathname.includes("/new-tasks") ||
    location.pathname.includes("/new-journals");
  const { whereImIn, setWhereImIn } = useRoutingState((state) => ({
    whereImIn: state.whereImIn,
    setWhereImIn: state.setWhereImIn,
  }));
  const handleButtonClick = (name) => {
    if (whereImIn !== name) {
      setWhereImIn(name);
    }
  };
  console.log("im from the nav bar  " + whereImIn);
  return (
    <div
      style={{
        display: isHidden ? "none" : "flex",
        width: "226px",
        height: TheHeight || "73px",
      }}
      className=" bg-myMateBlack rounded-myround flex justify-between  "
    >
      <NavLink
        onClick={() => handleButtonClick("task")}
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
        onClick={() => handleButtonClick("journal")}
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
