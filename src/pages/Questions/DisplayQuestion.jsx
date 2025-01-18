import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import QuestionsDetails from "./QuestionsDetails";


const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <QuestionsDetails />
      </div>
    </div>
  );
};

export default DisplayQuestion;
