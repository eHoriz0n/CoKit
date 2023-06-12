/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import InspectJournal from "./pages/inspect-journals/inspect-journals";
import Journal from "./pages/journals/journal";
import NewJournal from "./pages/new-journals/new-journals";
import NewTask from "./pages/new-task/new-task";
import Task from "./pages/task/task";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
