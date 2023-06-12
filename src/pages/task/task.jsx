import { useEffect, useState } from "react";
import Header from "../../components/header";
import PageBody from "../../components/pageBody";
import { usePageAnimation } from "../../hooks/animations/pages/taskAnime";
import { motion, AnimatePresence } from "framer-motion";
const Task = () => {
  const { PageAnimation } = usePageAnimation();
  return (
    <motion.div
      className="pt-16 px-5  myLg:flex myLg:flex-row myLg:gap-24 myLg:px-16 "
      // variants={TaskPageAnimation}
      initial={PageAnimation.Initial}
      // transition={{ delay: 0.5 }}
      animate={PageAnimation.inInitial}
      exit={PageAnimation.inPagination}
    >
      <AnimatePresence mode="wait">
        <Header thePlace={"Task"} />
      </AnimatePresence>
      <div className="myLg:ms-def">
        <PageBody theType={"Task"} />
      </div>
    </motion.div>
  );
};

export default Task;
