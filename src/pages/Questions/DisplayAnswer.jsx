// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useParams } from 'react-router-dom'
// import Avatar from '../../components/Avatar/Avatar'
// import moment from 'moment'
// import { deleteAnswer } from "../../actions/question";
// import toast from 'react-hot-toast'
// import HTMLReactParser from 'html-react-parser'

// const DisplayAnswer = ({ question, handleShare }) => {

//   const dispatch = useDispatch()
//   const User = useSelector((state) => state.currentUserReducer);
//   const { id } = useParams()

//   const handleDelete = (answerId, noOfAnswers) => {
//     dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
//     toast.success('Answer deleted')
//   }
//   return (
//     <div>
//       {question.answer.map((ans) => (
//         <div className="display-ans" key={ans._id}>
//           <p>{HTMLReactParser(ans.answerBody)}</p>
//           <div className="question-actions-user">
//             <div>
//               <button type="button" onClick={handleShare}>
//                 Share
//               </button>
//               {User?.result?._id === ans?.userId && (
//                 <button
//                   type="button"
//                   onClick={() => handleDelete(ans._id, question.noOfAnswers)}
//                 >
//                   Delete
//                 </button>
//               )}
//             </div>
//             <div>
//               <p>answered {moment(ans.answeredOn).fromNow()}</p>
//               <Link
//                 to={`/Users/${ans.userId}`}
//                 className="user-link"
//                 style={{ color: "#0086d8" }}
//               >
//                 <Avatar
//                   backgroundColor="lightgreen"
//                   px="8px"
//                   py="5px"
//                   borderRadius="4px"
//                 >
//                   {ans.userAnswered.charAt(0).toUpperCase()}
//                 </Avatar>
//                 <div>{ans.userAnswered}</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default DisplayAnswer





// import HTMLReactParser from 'html-react-parser';
// import moment from 'moment';
// import React from 'react';
// import toast from 'react-hot-toast';
// import { RiShareForwardFill } from "react-icons/ri";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import { deleteAnswer } from "../../actions/question";
// import Avatar from '../../components/Avatar/Avatar';

// const DisplayAnswer = ({ question, handleShare }) => {
//   const dispatch = useDispatch();
//   const User = useSelector((state) => state.currentUserReducer);
//   const { id } = useParams();

//   const handleDelete = (answerId, noOfAnswers) => {
//     dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
//     toast.success('Answer deleted');
//   };

//   return (
//     <div className="space-y-6">
//       {question.answer.map((ans) => (
//         <div className="p-4" key={ans._id}>
//           <p className="text-gray-800">{HTMLReactParser(ans.answerBody)}</p>
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
//             <div className="flex gap-4">
//               <button
//                 type="button"
//                 onClick={handleShare}
//                 className="text-blue-500 hover:underline inline-flex items-center"
//               ><RiShareForwardFill className='m-t' />
//                 Share
//               </button>
//               {User?.result?._id === ans?.userId && (
//                 <button
//                   type="button"
//                   onClick={() => handleDelete(ans._id, question.noOfAnswers)}
//                   className="text-red-500 hover:underline"
//                 >
//                   Delete
//                 </button>
//               )}
//             </div>
//             <div className="flex items-center gap-2 mt-4 sm:mt-0">
//               <p className="text-gray-500 text-sm">answered {moment(ans.answeredOn).fromNow()}</p>
//               <Link
//                 to={`/Users/${ans.userId}`}
//                 className="flex items-center gap-2 text-blue-500 hover:underline"
//               >
//                 <Avatar
//                   backgroundColor="lightgreen"
//                   px="8px"
//                   py="5px"
//                   borderRadius="4px"
//                 >
//                   {ans.userAnswered.charAt(0).toUpperCase()}
//                 </Avatar>
//                 <span className="font-medium text-gray-700">{ans.userAnswered}</span>
//               </Link>
//             </div>
//           </div><hr />
//         </div>

//       ))}

//     </div>
//   );
// };

// export default DisplayAnswer;




import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
import React from 'react';
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

          <p className="text-gray-800 mt-3 px-2">{HTMLReactParser(ans.answerBody)}</p>
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
