// import React from "react";
// import "./LeftSidebar.css";
// import { NavLink } from "react-router-dom";
// import Globe from "../../assets/Globe.svg";

// const LeftSidebar = () => {

//   return (
//     <div className="left-sidebar">
//       <nav className="side-nav">
//         <button className="nav-btn">
//           <NavLink to="/" className="side-nav-links" activeclassname="active">
//             <p>Home</p>
//           </NavLink>
//         </button>
//         <div className="side-nav-div">
//           <div>
//             <p>PUBLIC</p>
//           </div>
//           <button  className="nav-btn">
//             <NavLink
//               to="/Questions"
//               className="side-nav-links"
//               activeclassname="active"
//             >
//               <img src={Globe} alt="Globe" />
//               <p style={{ paddingLeft: "10px" }}> Questions </p>
//             </NavLink>
//           </button>
//           <button  className="nav-btn">
//             <NavLink
//               to="/Tags"
//               className="side-nav-links"
//               activeclassname="active"
//               style={{ paddingLeft: "40px" }}
//             >
//               <p>Tags</p>
//             </NavLink>
//           </button>
//           <button  className="nav-btn">
//             <NavLink
//               to="/Users"
//               className="side-nav-links"
//               activeclassname="active"
//               style={{ paddingLeft: "40px" }}
//             >
//               <p>Users</p>
//             </NavLink>
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default LeftSidebar;





import React from "react";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSidebar = () => {
  return (
    <div className="w-64 bg-white text-gray-800 border-r border-gray-200 min-h-screen">
      <nav className="flex flex-col p-4">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-2 mb-4 rounded-lg transition ${isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
            }`
          }
        >
          <p className="text-lg font-medium">Home</p>
        </NavLink>

        {/* PUBLIC Section */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">Public</p>
        </div>

        {/* Questions */}
        <NavLink
          to="/Questions"
          className={({ isActive }) =>
            `flex items-center p-2 mb-4 rounded-lg transition ${isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
            }`
          }
        >
          <img src={Globe} alt="Globe" className="w-5 h-5" />
          <p className="ml-3 font-medium">Questions</p>
        </NavLink>

        {/* Tags */}
        <NavLink
          to="/Tags"
          className={({ isActive }) =>
            `flex items-center pl-10 p-2 mb-4 rounded-lg transition ${isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
            }`
          }
        >
          <p className="font-medium">Tags</p>
        </NavLink>

        {/* Users */}
        <NavLink
          to="/Users"
          className={({ isActive }) =>
            `flex items-center pl-10 p-2 mb-4 rounded-lg transition ${isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
            }`
          }
        >
          <p className="font-medium">Users</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default LeftSidebar;
