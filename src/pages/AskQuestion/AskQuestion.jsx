import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from '@uiw/react-md-editor';
import "@uiw/react-md-editor/markdown-editor.css";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import rehypeSanitize from "rehype-sanitize";
import { askQuestion } from "../../actions/question";
import '../../App.css';
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId: User?.result._id,
            },
            navigate
          )
        );
        toast.success("Question posted successfully");
      } else toast.error("Please enter value in all the fields");
    } else toast.error("Please Login to ask question");
  };

  const printQuestionBody = (questionBody) => {
    console.log(questionBody);
  }
  return (
    <div className='home-container-1 '>
      <LeftSidebar />
      <div className='home-container-2'>
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">Ask a Public Question</h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <label htmlFor="ask-ques-title" className="block">
                    <h4 className="text-lg font-medium text-gray-700">Title</h4>
                    <p className="text-sm text-gray-500 mb-2 ">
                      Be specific and imagine you’re asking a question to another person
                    </p>
                    <input
                      type="text"
                      id="ask-ques-title"
                      onChange={(e) => setQuestionTitle(e.target.value)}
                      placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-sm"
                    />
                  </label>
                  <label htmlFor="ask-ques-body" className="block">
                    <h4 className="text-lg font-medium text-gray-700">Body</h4>
                    <p className="text-sm text-gray-500 mb-2">
                      Include all the information someone would need to answer your question
                    </p>

                    <MDEditor
                      value={questionBody}
                      onChange={setQuestionBody}
                      previewOptions={{
                        rehypePlugins: [[rehypeSanitize]],
                      }}
                      data-color-mode="light"
                      height={300}
                      className="rounded-xl"
                    />
                    <button onClick={() => printQuestionBody(questionBody)}>Print</button>

                  </label>
                  <label htmlFor="ask-ques-tags" className="block">
                    <h4 className="text-lg font-medium text-gray-700">Tags</h4>
                    <p className="text-sm text-gray-500 mb-2">
                      Add up to 5 tags to describe what your question is about
                    </p>
                    <input
                      type="text"
                      id="ask-ques-tags"
                      onChange={(e) => setQuestionTags(e.target.value.split(" "))}
                      placeholder="e.g. (xml typescript wordpress)"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-sm"
                    />
                  </label>
                </div>
                <input
                  type="submit"
                  value="Post Question"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
