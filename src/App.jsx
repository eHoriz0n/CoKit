import "./App.css";
import JournalInputs from "./components/journal-inputs";
import NavBar from "./components/navBar";
import TasksInput from "./components/task-inputs";
import InspectJournal from "./pages/inspect-journals/inspect-journals";
import InspectTask from "./pages/inspect-task/inspect-task";
import Journals from "./pages/journals/journals";
import NewJournal from "./pages/new-journals/new-journals";
import NewTask from "./pages/new-task/new-task";
import Task from "./pages/task/task";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Task />}></Route>
          <Route exact path="/journals" element={<Journals />}></Route>
        </Routes>
        {/* <NewJournal /> */}
        {/* <NewTask /> */}
        {/* <InspectJournal /> */}
        {/* <InspectTask /> */}
        <div className="fixed bottom-0 left-2/4 -translate-x-2/4 mb-4 mt-12">
          <NavBar TheHeight={"68px"} />
        </div>
      </Router>
    </>
  );
}

export default App;
