import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ContactList from '../ContactList';
import NewContactForm from '../NewContactForm';

export default function Middlebar({ setSelectedContact , contacts  , updateContact}) {
  const [searchParams] = useSearchParams();
  const isNewContact = searchParams.get('newContact') === 'true';

  return (
    <div className="ml-[18rem] w-[38rem] h-full  overflow-y-auto border-r border-zinc-800">
     
      {isNewContact ? (
        <NewContactForm updateContact={updateContact}  />
      ) : (
        <ContactList setSelectedContact={setSelectedContact} contacts={contacts} />
      )}
    </div>
  );
}
