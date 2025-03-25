import React, { useState } from "react";
import AddNoteForm from "../components/AddNoteForm";
import NotesList from "../components/NotesList";
import { User, LogOut, NotepadText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logging out...");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-purple-700 text-white flex justify-between items-center px-6 py-4 shadow-md">
        <i><NotepadText size={30}/></i>
        
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg transition"
          >
            <User size={24} />
            <span className="hidden sm:inline">Profile</span>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg py-2">
              <button 
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
                onClick={() => alert("Profile Clicked")}
              >
                View Profile
              </button>
              <button 
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-xl mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold text-center"> Students Name</h1>
        <AddNoteForm />
        <NotesList />
      </div>
    </div>
  );
};

export default Dashboard;
