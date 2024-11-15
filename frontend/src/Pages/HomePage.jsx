import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import LeftSideBar from "../components/bars/LeftSideBar";
import Middlebar from "../components/bars/Middlebar";
import Contact from "../components/Contact";
import BackendURL from "../utils/config.js";
import { showToast } from "../utils/toast.js";

function HomePage() {
  const location = useLocation();
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [updateContactID, setUpdateContactID] = useState(null);

  const fetchContacts = async () => {
    try {
      const AllContacts = await fetch(`${BackendURL}/api/contacts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await AllContacts.json();

      if (!AllContacts.ok) {
        showToast(data.message, 'error');
      } else {
        setContacts(data);
        if (data && data.length > 0) {
          setSelectedContact(data[0]);
        }
      }
    } catch (error) {
      showToast("Failed to fetch contacts", "error");
      console.error("Error fetching contacts:", error);
    }
  };
  useEffect(() => {
    console.log('fetching contacts');
    fetchContacts();
  }, [location]);

  
  return (
    <div className="flex flex-grow w-full h-screen bg-black text-white">
      <LeftSideBar />
      <Middlebar setSelectedContact={setSelectedContact}  contacts={contacts} updateContact={[updateContactID, setUpdateContactID]}/>
      <Contact contact={selectedContact} fetchContacts={fetchContacts} setUpdateContactID={setUpdateContactID} />
    </div>
  );
}

export default HomePage;
