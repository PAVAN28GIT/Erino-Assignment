import React, { useState } from "react";
import LeftSideBar from "../components/bars/LeftSideBar";
import Middlebar from "../components/bars/Middlebar";

import Contact from "../components/Contact";

function HomePage() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="flex w-full h-screen bg-black text-white">
      <LeftSideBar /> {/* Sidebar takes 2/12 of the screen width */}
      <div className="flex w-full">
        {" "}
        {/* Middlebar and Contact components inside a flex container */}
        <Middlebar setSelectedContact={setSelectedContact} />
        <Contact selectedContact={selectedContact} />
      </div>
    </div>
  );
}

export default HomePage;
