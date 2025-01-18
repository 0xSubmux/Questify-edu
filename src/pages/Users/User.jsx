import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <Link
      to={`/Users/${user._id}`}
      className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-50"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold text-lg rounded-full">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <h5 className="mt-2 text-gray-800 font-medium text-sm sm:text-base">
        {user.name}
      </h5>
    </Link>
  );
};

export default User;
