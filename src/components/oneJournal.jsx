import { NavLink } from "react-router-dom";
import "./typography.css";
const OneJournal = ({ id, title, description }) => {
  return (
    <NavLink
      to={`/journals/${id}`}
      onClick={() => console.log(id)}
      className="w-full  h-24 pt-6  myLg:max-w-44  rounded-2xl 	text-truncate cursor-pointer hover:bg-myLightDark	 bg-myMateBlack p-4 pb-3 "
    >
      <p className="font-bold THEtypo-xss text-myFontWhite mb-1 ">{title}</p>
      <p className=" THEtypo-xs1 text-truncate font-normal text-myFontWhite h-3/5  ">
        {description}
      </p>
    </NavLink>
  );
};

export default OneJournal;
