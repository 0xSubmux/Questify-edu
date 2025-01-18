// import React, { useState } from "react";
// import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import moment from "moment";
// import copy from "copy-to-clipboard";
// import toast from 'react-hot-toast'
// import HTMLReactParser from 'html-react-parser'


// import upvote from "../../assets/sort-up.svg";
// import downvote from "../../assets/sort-down.svg";
// import "./Questions.css";
// import Avatar from "../../components/Avatar/Avatar";
// import DisplayAnswer from "./DisplayAnswer";
// import {
//   postAnswer,
//   deleteQuestion,
//   voteQuestion
// } from "../../actions/question";
// import Editor from "../../components/Editor/Editor";
// import Loader from "../../components/Loader/Loader";


// const QuestionsDetails = () => {
//   const { id } = useParams();
//   const questionsList = useSelector((state) => state.questionsReducer);
//   const User = useSelector((state) => state.currentUserReducer);

//   const [answer, setAnswer] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const url = "https://stack-overflow-clone-gautam.vercel.app/";

//   const handlePostAns = (e, answerLength) => {
//     e.preventDefault();
//     if (!User) {
//       toast.error("Please Login or Signup to answer a question");
//       navigate("/Auth");
//     } else {
//       if (answer === "") {
//         toast.error("Enter an answer before submitting");
//       } else {
//         dispatch(
//           postAnswer({
//             id,
//             noOfAnswers: answerLength + 1,
//             answerBody: answer,
//             userAnswered: User.result.name,
//             userId: User.result._id
//           })
//         );
//         setAnswer("");
//       }
//     }
//   };

//   const handleShare = () => {
//     copy(url + location.pathname);
//     toast.success('URL copied to clipboard');
//   };

//   const handleDelete = () => {
//     dispatch(deleteQuestion(id, navigate));
//     toast.success('Question deleted')
//   };

//   const handleUpVote = () => {
//     if (!User) {
//       return toast.error("Please Login or Signup to upvote");
//     }
//     dispatch(voteQuestion(id, 'upVote', User.result._id))
//     toast.success('Upvoted')
//   };

//   const handleDownVote = () => {
//     if (!User) {
//       return toast.error("Please Login or Signup to downvote");
//     }
//     dispatch(voteQuestion(id, 'downVote', User.result._id))
//     toast.success('Downvoted')
//   };

//   return (
//     <div className="question-details-page">
//       {questionsList.data === null ? (
//         <Loader />
//       ) : (
//         <>
//           {questionsList.data
//             .filter((question) => question._id === id)
//             .map((question) => (
//               <div key={question._id}>
//                 <section className="question-details-container">
//                   <h1>{question.questionTitle}</h1>
//                   <div className="question-details-container-2">
//                     <div className="question-votes">
//                       <img
//                         src={upvote}
//                         alt=""
//                         width="18"
//                         className="votes-icon"
//                         onClick={handleUpVote}
//                       />
//                       <p>{question.upVote.length - question.downVote.length}</p>
//                       <img
//                         src={downvote}
//                         alt=""
//                         width="18"
//                         className="votes-icon"
//                         onClick={handleDownVote}
//                       />
//                     </div>
//                     <div style={{ width: "100%" }}>
//                       <p className="question-body">{HTMLReactParser(question.questionBody)}</p>
//                       <div className="question-details-tags">
//                         {question.questionTags.map((tag) => (
//                           <div key={tag}>{tag}</div>
//                         ))}
//                       </div>
//                       <div className="question-actions-user">
//                         <div>
//                           <button type="button" onClick={handleShare}>
//                             Share
//                           </button>
//                           {User?.result._id === question.userId && (
//                             <button type="button" onClick={handleDelete}>
//                               Delete
//                             </button>
//                           )}
//                         </div>
//                         <div>
//                           <p>asked {moment(question.askedOn).fromNow()}</p>
//                           <Link
//                             to={`/Users/${question.userId}`}
//                             className="user-link"
//                             style={{ color: "#0086d8" }}
//                           >
//                             <Avatar
//                               backgroundColor="orange"
//                               px="8px"
//                               py="5px"
//                               borderRadius="4px"
//                             >
//                               {question.userPosted.charAt(0).toUpperCase()}
//                             </Avatar>
//                             <div>{question.userPosted}</div>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 {question.noOfAnswers !== 0 && (
//                   <section>
//                     <h3>{question.noOfAnswers} Answers</h3>
//                     <DisplayAnswer
//                       key={question._id}
//                       question={question}
//                       handleShare={handleShare}
//                     />
//                   </section>
//                 )}
//                 <section className="post-ans-container">
//                   <h3>Your Answer</h3>
//                   <form
//                     onSubmit={(e) => {
//                       handlePostAns(e, question.answer.length);
//                     }}
//                   >
//                     <div>
//                       <Editor
//                         value={answer}
//                         onChange={setAnswer}
//                       />
//                     </div>
//                     <br />
//                     <input
//                       type="submit"
//                       className="post-ans-btn"
//                       value="Post Your Answer"
//                     />
//                   </form>
//                   <p>
//                     Browse other Question tagged
//                     {question.questionTags.map((tag) => (
//                       <Link to="/Tags" key={tag} className="ans-tags">
//                         {" "}
//                         {tag}{" "}
//                       </Link>
//                     ))}{" "}
//                     or
//                     <Link
//                       to="/AskQuestion"
//                       style={{ textDecoration: "none", color: "#009dff" }}
//                     >
//                       {" "}
//                       ask your own question.
//                     </Link>
//                   </p>
//                 </section>
//               </div>
//             ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default QuestionsDetails;


import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { RiShareForwardFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import copy from "copy-to-clipboard";
import HTMLReactParser from 'html-react-parser';
import moment from "moment";
import toast from 'react-hot-toast';

// import upvote from "../../assets/sort-up.svg";
// import downvote from "../../assets/sort-down.svg";
import {
  deleteQuestion,
  postAnswer,
  voteQuestion
} from "../../actions/question";
import Avatar from "../../components/Avatar/Avatar";
import Editor from "../../components/Editor/Editor";
import Loader from "../../components/Loader/Loader";
import DisplayAnswer from "./DisplayAnswer";

const QuestionsDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);
  const User = useSelector((state) => state.currentUserReducer);

  const [answer, setAnswer] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const toggleSection = () => {
    setIsVisible((prev) => !prev);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "https://stack-overflow-clone-gautam.vercel.app/";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (!User) {
      toast.error("Please Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      if (answer === "") {
        toast.error("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: User.result.name,
            userId: User.result._id
          })
        );
        setAnswer("");
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    toast.success('URL copied to clipboard');
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
    toast.success('Question deleted');
  };

  const handleUpVote = () => {
    if (!User) {
      return toast.error("Please Login or Signup to upvote");
    }
    dispatch(voteQuestion(id, 'upVote', User.result._id));
    toast.success('Upvote');
  };

  const handleDownVote = () => {
    if (!User) {
      return toast.error("Please Login or Signup to downvote");
    }
    dispatch(voteQuestion(id, 'downVote', User.result._id));
    toast.success('Downvote');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-5">
      {questionsList.data === null ? (
        <Loader />
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="p-6 bg-white border m- border-gray-300 rounded-lg shadow-md">
                  <h1 className="text-2xl font-semibold text-gray-800">{question.questionTitle}</h1>
                  <div className="flex gap-4 mt-4">
                    <div className="flex flex-row items-center">
                    </div>
                    <div className="w-full">
                      <p className="text-gray-700">{HTMLReactParser(question.questionBody)}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <BiSolidUpvote
                          className="cursor-pointer hover:text-blue-500 w-5 h-5"
                          onClick={handleUpVote}
                        />
                        <p className="font-bold text-gray-700">
                          {question.upVote.length - question.downVote.length}
                        </p>
                        <BiSolidDownvote
                          className="cursor-pointer hover:text-red-500 w-5 h-5"
                          onClick={handleDownVote}
                        />
                        {question.questionTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-700 text-gray-200 text-sm border border-gray-300 rounded-3xl"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-4">
                          <button className="text-blue-500 hover:underline  inline-flex items-center" onClick={handleShare}>
                            <RiShareForwardFill />
                            Share
                          </button>
                          {User?.result._id === question.userId && (
                            <button className="text-red-500 hover:underline" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-500 text-sm">asked {moment(question.askedOn).fromNow()}</p>
                          <Link to={`/Users/${question.userId}`} className="flex items-center gap-2 text-blue-500">
                            <Avatar backgroundColor="orange" px="8px" py="5px" borderRadius="4px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <span className="font-medium">{question.userPosted}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-6">
                  <button
                    onClick={toggleSection}
                    className="text-sm font-semibold mb-4 px-4 py-2 bg-white text-black-700 hover:bg-gray-100 border-slate-300 border rounded-lg inline-flex items-center  shadow-sm"
                  >
                    <span className="flex items-start gap-2">
                      <span className="font-semibold">
                        {isVisible ? < AiOutlineMinus style={{ fontSize: '1.2rem' }} /> : <AiOutlinePlus style={{ fontSize: '1.2rem' }} />}
                        {/* <AiOutlinePlus style={{ fontSize: '1.2rem' }} /> */}
                      </span>
                      {isVisible ? "Not to Reply" : "Write an Reply"}
                    </span>
                  </button>
                  {isVisible && (
                    <section className="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold">Your Answer</h3>
                      <form
                        onSubmit={(e) => handlePostAns(e, question.answer.length)}
                        className="mt-4"
                      >
                        <Editor value={answer} onChange={setAnswer} />
                        <input
                          type="submit"
                          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                          value="Post Your Answer"
                        />
                      </form>
                      <p className="text-sm text-gray-600 mt-4">
                        Browse other questions tagged
                        {question.questionTags.map((tag) => (
                          <Link to="/Tags" key={tag} className="ml-1 text-blue-500 hover:underline">
                            {tag}
                          </Link>
                        ))}{" "}
                        or{" "}
                        <Link to="/AskQuestion" className="text-blue-500 hover:underline">
                          ask your own question.
                        </Link>
                      </p>
                    </section>
                  )}
                </section>
                {question.noOfAnswers !== 0 && (
                  <section className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800">{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
