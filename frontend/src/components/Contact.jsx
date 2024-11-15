import React from 'react';
import { Avatar, Typography, Divider } from '@mui/material';

function Contact({ contact }) {
  const profilpic = "https://www.w3schools.com/howto/img_avatar.png";
  
  if (!contact) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl">
        Select a contact to view details
      </div>
    );
  }

  return (
    <div
    style={{ width: 'calc(100vw - 56rem)' }}  
    className="h-full p-5">
      <div className="h-full bg-zinc-900 p-5 rounded-xl text-white flex flex-col items-center space-y-4">
        <Avatar
          src={ profilpic}
          alt={contact.name}
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h4" className="font-bold">
           {`${contact.firstName} ${contact.lastName}`}
        </Typography>
        <Divider variant="middle" className="w-full bg-gray-700" />
        
        <div className="w-full px-6 space-y-4">
          <div>
            <Typography variant="body1" className="text-gray-400">Phone:</Typography>
            <Typography variant="body1">{contact.phone}</Typography>
          </div>
          
          <div>
            <Typography variant="body1" className="text-gray-400">Email:</Typography>
            <Typography variant="body1">{contact.email}</Typography>
          </div>
          <div>
            <Typography variant="body1" className="text-gray-400">Company:</Typography>
            <Typography variant="body1">{contact.company}</Typography>
          </div>
          <div>
            <Typography variant="body1" className="text-gray-400">Title:</Typography>
            <Typography variant="body1">{contact.jobTitle}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
