import "./App.css";
import InspectJournal from "./pages/inspect-journals/inspect-journals";
import Journal from "./pages/journals/journal";
import NewJournal from "./pages/new-journals/new-journals";
import NewTask from "./pages/new-task/new-task";
import Task from "./pages/task/task";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Task />}></Route>
          <Route exact path="/journals" element={<Journal />}></Route>
          <Route exact path="/new-journals" element={<NewJournal />}></Route>
          <Route exact path="/new-tasks" element={<NewTask />}></Route>
          <Route
            exact
            path="/journals/:id"
            element={<InspectJournal />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
