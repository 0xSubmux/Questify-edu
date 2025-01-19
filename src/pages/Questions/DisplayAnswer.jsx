import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from '@uiw/react-md-editor';
import "@uiw/react-md-editor/markdown-editor.css";
import moment from 'moment';
import toast from 'react-hot-toast';
import { TfiSharethis } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteAnswer } from "../../actions/question";
import Avatar from '../../components/Avatar/Avatar';

const DisplayAnswer = ({ question, handleShare }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
    toast.success('Answer deleted');
  };

  return (
    <div className="">
      {question.answer.map((ans) => (
        <div className="p-4" key={ans._id}>
          <div className="flex items-center gap-2 mt-4 sm:mt-0 justify-between">
            <Link
              to={`/Users/${ans.userId}`}
              className="flex items-center gap-2 text-black hover:text-gray-700"
            >
              <Avatar
                backgroundColor="lightgreen"
                px="0.8rem"
                py="0.3rem"
                borderRadius="2rem"
              >
                {ans.userAnswered.charAt(0).toUpperCase()}
              </Avatar>
              <span className="font-medium text-gray-700">{ans.userAnswered}</span>
            </Link>
            <p className="text-gray-500 text-sm"> {moment(ans.answeredOn).fromNow()} <button
              type="button"
              onClick={handleShare}
              className="text-black hover:text-gray-700 inline-flex items-center"
            ><TfiSharethis className='m-2' />
            </button></p>
          </div>

          <MDEditor.Markdown source={question.questionBody} style={{
            whiteSpace: 'pre-wrap', backgroundColor
              : 'white', padding: '1rem', borderRadius: '1rem', marginTop: '1rem'
          }} />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
            <div className="flex gap-4">
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                  className="text-black hover:text-gray-700"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
