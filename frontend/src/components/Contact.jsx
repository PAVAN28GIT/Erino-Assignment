import React from 'react';
import { Avatar, Typography, Divider, Button } from '@mui/material';
import { showToast } from '../utils/toast.js';
import  BackedURL  from '../utils/config.js';
import { useSearchParams } from 'react-router-dom';

function Contact({ contact , fetchContacts , setUpdateContactID }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const profilpic = "https://www.w3schools.com/howto/img_avatar.png";

  const handleDelete = async (id) => {
    if (id === undefined) {
      showToast('Select Contact to delete', 'error');
      return;
    }
    
    try {
      showToast('Deleting contact...', 'loading');

      const res = await fetch(`${BackedURL}/api/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      showToast('', 'dismiss'); // Dismiss the loading toast

      if (res.ok) {
        showToast('Contact deleted successfully', 'success');
        fetchContacts();
      } else {
        showToast('Failed to delete contact', 'error');
      }
    } catch (error) {
      showToast('', 'dismiss');
      showToast(error.message, 'error');
      console.log(error);
    }
  };

  const handleUpdate = async(id) => {
    setUpdateContactID(id);
    console.log("updated contact id to sfsf")
    searchParams.set("newContact", "true");
    setSearchParams(searchParams);
    };
  
  if (!contact) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl">
        Select a contact to view details
      </div>
    );
  }

  return (
    <div style={{ width: 'calc(100vw - 56rem)' }} className="h-full p-5">
      <div className="h-full bg-zinc-900 p-5 rounded-xl text-white flex flex-col items-center space-y-4">
        <Avatar
          src={profilpic}
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

        {/* Update and Delete buttons */}
        <div className="w-full flex justify-between mt-6 ">
          <Button 
            variant="contained" 
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white hover:scale-105 transform transition duration-500"
            onClick={() => handleUpdate(contact._id)} 
            sx={{ width: '48%' }}
          >
            Update
          </Button>
          <Button 
            variant="outlined" 
            color="inherit" 
            className="hover:scale-105 transform transition duration-500"
            onClick={() => handleDelete(contact._id)} 
            sx={{ width: '48%' }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
