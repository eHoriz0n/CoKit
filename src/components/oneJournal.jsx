import { NavLink } from "react-router-dom";
import "./typography.css";
import { motion } from "framer-motion";
import { useOneJournalAnimation } from "../hooks/animations/components/oneJournalAnime";
const OneJournal = ({ id, title, description }) => {
  const { singleJournalAnimation } = useOneJournalAnimation();
  return (
    <motion.div
      variants={singleJournalAnimation}
      whileHover={singleJournalAnimation.inHover}
      whileTap={singleJournalAnimation.inClick}
      className="w-full h-24 pt-6 myLg:max-w-44 rounded-2xl text-truncate
    cursor-pointer hover:bg-myLightDark bg-myMateBlack p-4 pb-3 "
    >
      <NavLink to={`/journals/${id}`} className={"h-full w-full"}>
        <p className="font-bold THEtypo-xss text-myFontWhite mb-1 ">{title}</p>
        <p className=" THEtypo-xs1 text-truncate font-normal text-myFontWhite h-3/5  ">
          {description}
        </p>
      </NavLink>
    </motion.div>
  );
};
export default OneJournal;
