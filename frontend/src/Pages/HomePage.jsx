import React, { useState } from "react";
import LeftSideBar from "../components/bars/LeftSideBar";
import Middlebar from "../components/bars/Middlebar";

import Contact from "../components/Contact";

function HomePage() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="flex flex-grow w-full h-screen bg-black text-white">
      <LeftSideBar />
      
        <Middlebar setSelectedContact={setSelectedContact} />
        <Contact selectedContact={selectedContact} />
      </div>
  
  );
}

export default HomePage;
