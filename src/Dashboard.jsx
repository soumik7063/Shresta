import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react"

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="content-container">
        <div class="text-center mb-12">
          <span class="badge">Admin Dashboard</span>
          <h1 class="heading">Welcome to your Dashboard</h1>
          <p class="subtext">
            Manage and monitor your system from one central location
          </p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <FaArrowRightLong className="w-8 h-8 text-gray-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Complaints Management
            </h2>
            <p className="text-gray-600 text-center max-w-md">
              View and manage all user complaints in one centralized location
            </p>
            <button
              onClick={() => navigate("/complaints")}
              className="mt-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 px-6 py-3 rounded-lg"
            >
              View Complaints
              <FaArrowRightLong className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard;
