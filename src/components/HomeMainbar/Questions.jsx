import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";


const Questions = ({ question }) => {
  return (
    <Link
      to={`/Questions/${question._id}`}

    >
      <div className="flex flex-col gap-4 p-4 bg-gray-50 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 mb-2">
        {/* Votes and Answers Row */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-xs sm:text-sm">
          <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded-full inline-flex items-center">
            <span className="font-semibold">{question.upVote.length - question.downVote.length}</span> <MdOutlineFavorite />
          </span>
          <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded-full inline-flex items-center">
            <span className="font-semibold px-1">{question.noOfAnswers}
            </span><RiQuestionAnswerFill />
          </span>
          {question.questionTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs text-gray-800 bg-gray-200 border border-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Question Details Section */}
        <div className="flex-grow">
          <Link
            to={`/Questions/${question._id}`}
            className="text-lg font-medium text-blue-700 hover:underline"
          >
            {question.questionTitle.length > (window.innerWidth <= 400 ? 70 : 90)
              ? question.questionTitle.substring(
                0,
                window.innerWidth <= 400 ? 70 : 90
              ) + "..."
              : question.questionTitle}
          </Link>
          <div className="text-xs text-gray-500 mt-2">
            asked {moment(question.askedOn).fromNow()} by
            <span className="ml-1 font-medium text-gray-800">
              {question.userPosted}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Questions;
