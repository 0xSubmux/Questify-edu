// import React from "react";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import Loader from "../Loader/Loader";
// import "./HomeMainbar.css";
// import QuestionList from "./QuestionList";


// const HomeMainbar = () => {
//   const location = useLocation();
//   const user = 1;
//   const navigate = useNavigate();

//   const questionsList = useSelector(state => state.questionsReducer)

//   const checkAuth = () => {
//     if (user === null) {
//       alert("Login or Signup to ask a question");
//       navigate("/Auth");
//     } else {
//       navigate("/AskQuestion");
//     }
//   };

//   return (
//     <div className="main-bar">
//       <div className="main-bar-header">
//         {location.pathname === "/" ? (
//           <h1>Top Questions</h1>
//         ) : (
//           <h1>All Questions</h1>
//         )}
//         <button onClick={checkAuth} className="ask-btn">
//           Ask Question
//         </button>
//       </div>
//       <div className="px-3">
//         {questionsList.data === null ? (
//           <Loader />
//         ) : (
//           <>
//             <p>{questionsList.data.length} questions</p>
//             <QuestionList questionsList={questionsList.data} />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeMainbar;


import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        {location.pathname === "/" ? (
          <h1 className="text-xl font-bold text-gray-800">Top Questions</h1>
        ) : (
          <h1 className="text-xl font-bold text-gray-800">All Questions</h1>
        )}
        <button
          onClick={checkAuth}
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-blue-300 transition duration-200 shadow-md"
        >
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <Loader />
        ) : (
          <>
            <p className="text-sm text-gray-600 mb-4">
              {questionsList.data.length} questions
            </p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
