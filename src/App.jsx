import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <title>Co Kit</title>
        <meta property="og:image" content="../public/1686615042159.png"></meta>
      </Helmet>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}
export default App;
