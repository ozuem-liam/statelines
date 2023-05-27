import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import CourierQuestionaire from "./pages/Questionaire/courierQuestion";
import UserQuestionaire from "./pages/Questionaire/userQuestionaire";
import Thankyou from "./pages/Thankyou/Thankyou";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route
            path="/courierQuestionaire"
            element={<CourierQuestionaire />}
          />
          <Route path="/userQuestionaire" element={<UserQuestionaire />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
