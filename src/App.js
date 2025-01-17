import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import "./App.css";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import Chatbot from "./components/Chatbot/Chatbot";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Toaster />
        <Navbar setIsOpen={setIsOpen} />
        <AllRoutes />
        {isOpen ? (
          <Chatbot
            setIsOpen={setIsOpen}
            isVerified={isVerified}
            setIsVerified={setIsVerified}
          />
        ) : (
          <button
            className="open-chatbot bo"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Have Doubts? Click here!
          </button>
        )}
      </Router>
    </div>
  );
}

export default App;
