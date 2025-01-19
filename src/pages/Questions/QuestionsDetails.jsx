import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from '@uiw/react-md-editor';
import "@uiw/react-md-editor/markdown-editor.css";
import copy from "copy-to-clipboard";
import moment from "moment";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { TfiSharethis } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import rehypeSanitize from "rehype-sanitize";
import {
  deleteQuestion,
  postAnswer,
  voteQuestion
} from "../../actions/question";
import Avatar from "../../components/Avatar/Avatar";
import Loader from "../../components/Loader/Loader";
import DisplayAnswer from "./DisplayAnswer";

const QuestionsDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);
  const User = useSelector((state) => state.currentUserReducer);

  const [answer, setAnswer] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    toast.success("URL copied to clipboard");
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
    toast.success("Question deleted");
  };

  const handleUpVote = () => {
    if (!User) {
      return toast.error("Please Login or Signup to upvote");
    }
    dispatch(voteQuestion(id, "upVote", User.result._id));
    toast.success("Upvoted");
  };

  const handleDownVote = () => {
    if (!User) {
      return toast.error("Please Login or Signup to downvote");
    }
    dispatch(voteQuestion(id, "downVote", User.result._id));
    toast.success("Downvoted");
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-1">
      {questionsList.data === null ? (
        <Loader />
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="p-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{question.questionTitle}</h1>
                  <div className="flex flex-col md:flex-row mt-4 gap-6">

                    {!isMobile && (
                      <div className="flex flex-col items-center">
                        {/* Upvote Button */}
                        <div
                          className="p-2 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full cursor-pointer transition duration-300"
                          onClick={handleUpVote}
                        >
                          <BiSolidUpvote className="w-6 h-6" />
                        </div>

                        {/* Vote Count */}
                        <p className="text-lg font-bold text-gray-700 mt-1">
                          {question.upVote.length - question.downVote.length}
                        </p>

                        {/* Downvote Button */}
                        <div
                          className="p-2 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full cursor-pointer transition duration-300 mt-1"
                          onClick={handleDownVote}
                        >
                          <BiSolidDownvote className="w-6 h-6" />
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <MDEditor.Markdown source={question.questionBody} style={{
                        whiteSpace: 'pre-wrap', backgroundColor
                          : 'white', padding: '1rem', borderRadius: '1rem'
                      }} />
                      <div className="flex flex-wrap gap-2 mt-3 justify-between ">
                        {isMobile && (
                          <div className="flex items-center gap-2">
                            {/* Upvote Button */}
                            <div
                              className="p-2 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full cursor-pointer transition duration-300"
                              onClick={handleUpVote}
                            >
                              <BiSolidUpvote className="w-6 h-6" />
                            </div>

                            {/* Vote Count */}
                            <p className="text-lg font-bold text-gray-700">
                              {question.upVote.length - question.downVote.length}
                            </p>

                            {/* Downvote Button */}
                            <div
                              className="p-2 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full cursor-pointer transition duration-300"
                              onClick={handleDownVote}
                            >
                              <BiSolidDownvote className="w-6 h-6" />
                            </div>
                          </div>
                        )}
                        {question.questionTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 text-sm bg-gray-100 text-gray-800 border border-gray-100 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}

                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-4">
                          <button
                            className="text-blue-500 hover:underline inline-flex items-center"
                            onClick={handleShare}
                          >
                            <TfiSharethis className="mr-1" />
                          </button>
                          {User?.result._id === question.userId && (
                            <button
                              className="text-red-500 hover:underline"
                              onClick={handleDelete}
                            >
                              Delete
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-500 text-sm">
                            asked {moment(question.askedOn).fromNow()}
                          </p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="flex items-center gap-2 text-blue-500 hover:underline"
                          >
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
                    onClick={() => setIsVisible((prev) => !prev)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200"
                  >
                    {isVisible ? <AiOutlineMinus className="inline" /> : <AiOutlinePlus className="inline" />}{" "}
                    {isVisible ? "Cancel Reply" : "Write a Reply"}
                  </button>
                  {isVisible && (
                    <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-gray-800">Your Answer</h3>
                      <form
                        onSubmit={(e) => handlePostAns(e, question.answer.length)}
                        className="mt-4"
                      >
                        <MDEditor
                          value={answer}
                          onChange={setAnswer}
                          previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                          }}
                          data-color-mode="light"
                          height={300}
                          className="rounded-xl"
                        />

                        <button
                          type="submit"
                          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Post Your Answer
                        </button>
                      </form>
                    </div>
                  )}
                </section>

                {question.noOfAnswers !== 0 && (
                  <section className="mt-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">
                      {question.noOfAnswers} Answers
                    </h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
              </div>
            ))
          }
        </>
      )}
    </div >
  );
};

export default QuestionsDetails;
