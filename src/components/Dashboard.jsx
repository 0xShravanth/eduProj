import React from "react";
import sidebarImage from "../assets/Rectangle 18.png";
import mainContentImage from "../assets/Rectangle 17.png";
import rightPanelImage from "../assets/Rectangle 19.png";

const Dashboard = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex">
      <div className="w-1/5 bg-gray-800 p-6 flex justify-center items-center">
        <img
          src={sidebarImage}
          alt="Sidebar"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-3/5 p-6 flex justify-center items-center">
        <img
          src={mainContentImage}
          alt="Main Content"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-1/5 bg-gray-800 p-6 flex justify-center items-center">
        <img
          src={rightPanelImage}
          alt="Right Panel"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Dashboard;
