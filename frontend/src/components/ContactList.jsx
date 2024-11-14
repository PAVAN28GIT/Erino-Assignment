import React from 'react';
import { Avatar } from '@mui/material';

const contacts = [
  { id: 1, name: 'Dad', tags: 'Family', phone: '+1 (484) 436 50 49', email: 'adams_g@hotmail.com', avatarUrl: 'path_to_image' },
  { id: 2, name: 'Mom', tags: 'Family', phone: '+1 (484) 709 82 76', email: 'brenda_adams80@hotmail.com', avatarUrl: 'path_to_image' },
  { id: 3, name: 'Anna', tags: 'Family, Job', phone: '+1 (484) 293 88 56', email: 'ana_ritchie@hotmail.com', avatarUrl: 'path_to_image' },
  { id: 4, name: 'Bobby Crown', tags: 'Job, Family', phone: '+1 (484) 288 60 28', email: 'crown2919@hotmail.com', avatarUrl: 'path_to_image' },
  { id: 5, name: 'Brandon', tags: 'Family', phone: '+1 (484) 995 84 37', email: 'bd98@yahoo.com', avatarUrl: 'path_to_image' },
  { id: 6, name: 'David', tags: 'Sports, Family', phone: '+1 (484) 322 22 32', email: 'dare_d@hotmail.com', avatarUrl: 'path_to_image' },
  { id: 7, name: 'Diana', tags: 'Family', phone: '+1 (484) 812 32 01', email: 'p_diana@gmail.com', avatarUrl: 'path_to_image' },
  { id: 8, name: 'Gino', tags: 'Gaming, Family', phone: '+1 (484) 381 44 56', email: 'ginosaur@hotmail.com', avatarUrl: 'path_to_image' },
  { id: 9, name: 'Jerry', tags: 'Developers, Family', phone: '+1 (484) 132 61 42', email: 'jerryco@conceptzilla.com', avatarUrl: 'path_to_image' },
  { id: 10, name: 'Jeffrey Macejkovic', tags: 'Family', phone: '+1 (484) 576 90 92', email: 'macekovic@gmail.com', avatarUrl: 'path_to_image' },
];

function ContactList({ setSelectedContact }) {
  return (
    <div className="bg-black text-white p-4 space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          onClick={() => setSelectedContact(contact)}
          className="flex items-center justify-between px-3 py-2 bg-zinc-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-transform cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <Avatar src={contact.avatarUrl} alt={contact.name} />
            <div>
              <h2 className="text-lg font-semibold">{contact.name}</h2>
              <p className="text-sm text-gray-400">{contact.tags}</p>
            </div>
          </div>
          <div className="text-right">
            <p>{contact.phone}</p>
            <p className="text-gray-400">{contact.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
