import React from 'react';
import { Avatar } from '@mui/material';


function ContactList({ setSelectedContact , contacts  }) {

  
  return (
    <div className="bg-black w-full text-white space-y-4 overflow-y-auto">

      <div className="w-[38rem] py-4 fixed z-10 text-center text-gray-300 font-Rubik text-4xl font-semibold bg-black "> All Contacts</div>

      <div className='pt-16 px-2 '>
      {contacts.map((contact) => (
        <div
          key={contact._id}
          onClick={() => setSelectedContact(contact)}
          className="flex items-center justify-between px-5 py-2 bg-zinc-900 rounded-lg hover:bg-gray-700 hover:scale-105 transition-transform cursor-pointer my-3"
        >
          <div className="flex items-center space-x-4">
            <Avatar src={contact.avatarUrl} alt={contact.name} />
            <div>
              <h2 className="text-lg font-semibold">{contact.firstName} <span>{ contact.lastName}</span></h2>
              <p className="text-sm text-gray-400">{contact.phone}</p>
            </div>
          </div>
          <div className="text-right">
            <p>{contact.company}, <span>{contact.jobTitle}</span></p>
            <p className="text-gray-400">{contact.email}</p>
          </div>
        </div>
      ))}

      </div>


     
    </div>
  );
}

export default ContactList;
