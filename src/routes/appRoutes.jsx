import { AnimatePresence } from "framer-motion";
import InspectJournal from "../pages/inspect-journals/inspect-journals";
import Journal from "../pages/journals/journal";
import NewJournal from "../pages/new-journals/new-journals";
import NewTask from "../pages/new-task/new-task";
import Task from "../pages/task/task";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Task />}></Route>
        <Route exact path="/journals" element={<Journal />}></Route>
        <Route exact path="/new-journals" element={<NewJournal />}></Route>
        <Route exact path="/new-journals/:id" element={<NewJournal />}></Route>
        <Route exact path="/new-tasks" element={<NewTask />}></Route>

        <Route exact path="/journals/:id" element={<InspectJournal />}></Route>
        {/* <Route
              exact
              path="/"
              element={
                <motion.div
                  initial={{ x: "-300px", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2  }}
                  exit={{ opacity: 0 }}
                  // variants={variants}
                >
                  <Task />
                </motion.div>

                // <motion.button
                //   whileHover={{ scale: 4.1 }}
                //   whileTap={{ scale: 0.9 }}
                //   className="bg-black"
                // >
                //   click me
                // </motion.button>
              }
            /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
