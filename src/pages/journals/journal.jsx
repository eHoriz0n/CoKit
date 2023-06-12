import Header from "../../components/header";
import PageBody from "../../components/pageBody";
import { motion, AnimatePresence } from "framer-motion";
import { usePageAnimation } from "../../hooks/animations/pages/taskAnime";
const Journal = () => {
  const { PageAnimation } = usePageAnimation();
  return (
    <motion.div
      className="pt-16 px-5 myLg:flex myLg:flex-row myLg:gap-24 myLg:px-16 "
      initial={PageAnimation.Initial}
      animate={PageAnimation.inInitial}
      exit={PageAnimation.inPagination}
    >
      <Header thePlace={"Journal"} />
      <div className="myLg:ms-def">
        <PageBody theType={"Journal"} />
      </div>
    </motion.div>
  );
};

export default Journal;
