import { AnimatePresence } from "framer-motion";
import InspectJournal from "../pages/inspect-journals/inspect-journals";
import Journal from "../pages/journals/journal";
import NewJournal from "../pages/new-journals/new-journals";
import NewTask from "../pages/new-task/new-task";
import Task from "../pages/task/task";
import { Routes, Route, useLocation } from "react-router-dom";
import ErrorPage from "../pages/errorPage/errorPage";
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
        <Route exact path="*" element={<ErrorPage />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
export default AppRoutes;
