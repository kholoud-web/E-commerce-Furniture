import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import Orders from "./OrderSection";
import Settings from "./Settings";
import Addresses from "./Addresses";
import { useUser } from "../../Context/UserContext";
import { useNavigate } from "react-router";

export default function Profile() {
  const {user,logout} = useUser();
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();
   

  const handleLogoutBtn =()=>{
    
     logout();
     navigate ("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside className="md:w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">My Account</h2>

        {["profile", "orders", "addresses", "settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`block w-full text-left mb-4 capitalize cursor-pointer ${
              activeTab === tab ? "font-bold text-black" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}

        <button onClick={handleLogoutBtn}
           className="bg-black text-white py-2  px-6 rounded-md mt-4 font-medium cursor-pointer">LogOut</button>
        </aside>

      {/* Content */}
      <main className="flex-1 md:p-8 sm:p-4">
        {activeTab === "profile" && <ProfileInfo  />}
        {activeTab === "orders" && <Orders />}
        {activeTab === "addresses" && <Addresses />}
        {activeTab === "settings" && <Settings />}
      </main>
      
    </div>
  );
}