import { useSelector } from "react-redux";
import '../../App.css';
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Loader from "../../components/Loader/Loader";
import User from './User';

const Users = () => {
  const users = useSelector((state) => state.usersReducer);

  return (
    <div className='home-container-1 '>
      <LeftSidebar />
      <div className='home-container-2'>
        <div className="container mx-auto px-4 py-6"></div>
        <div className="flex flex-col sm:flex-row px-3 py-6 space-y-6 sm:space-y-0 sm:space-x-6 bg-white">
          <div className="flex-grow mt-8 sm:mt-0">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Users</h1>
            {users.length === 0 ? (
              <Loader />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user) => (
                  <User user={user} key={user?._id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
