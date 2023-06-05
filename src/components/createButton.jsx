/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./plusButton.css";
import useRoutingState from "../context/routeState";
import { useEffect, useState } from "react";
const CreateBtn = ({ TheScale, TheWork }) => {
  const { whereImIn } = useRoutingState((state) => ({
    whereImIn: state.whereImIn,
  }));
  const [routeto, setRouteto] = useState("/");

  // const EditPage = () => {
  //   console.log("yeeey i edited new item");
  //   useEffect(() => {
  //     console.log(whereImIn);
  //     whereImIn === "journal" ? setRouteto("/journals") : setRouteto("/");
  //   }, []);
  // };
  // const CreatePage = () => {
  //   console.log("yeeey i made new item");
  //   useEffect(() => {
  //     console.log("the create  " + whereImIn);
  //     whereImIn === "journal" ? setRouteto("/journals") : setRouteto("/");
  //   }, []);
  // };

  useEffect(() => {
    whereImIn === "journal" ? setRouteto("/journals") : setRouteto("/");
  }, [whereImIn]);

  // if (TheWork === "New") {
  //   NewPage();
  // } else if (TheWork === "Create") {
  //   CreatePage();
  // } else if (TheWork === "Edit") {
  //   EditPage();
  // }
  return (
    <div>
      {/* <button
        className=" bg-myBrown bg-no-repeat border-6 border-myFontWhite
        rounded-full border-solid bg-center w-15 h-15 bg-button-bg
        hover:bg-myDarkYellow "
        style={{
          width: TheScale || "68px",
          height: TheScale || "68px",
          backgroundSize: (parseInt(TheScale) * 26) / 68 || "26px",
          borderWidth: (parseInt(TheScale) * 6) / 68 || "6px",
        }}
      > */}
      <NavLink to={routeto}>
        <button
          className=" bg-myBrown bg-no-repeat border-6 border-myFontWhite
        rounded-full border-solid bg-center w-15 h-15 bg-button-bg
        hover:bg-myDarkYellow "
          style={{
            width: TheScale || "68px",
            height: TheScale || "68px",
            backgroundSize: (parseInt(TheScale) * 26) / 68 || "26px",
            borderWidth: (parseInt(TheScale) * 6) / 68 || "6px",
          }}
        ></button>
      </NavLink>
      {/* </button> */}
    </div>
  );
};

export default CreateBtn;
