import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ContactList from '../ContactList';
import NewContactForm from '../NewContactForm';

export default function Middlebar({ setSelectedContact }) {
  const [searchParams] = useSearchParams();
  const isNewContact = searchParams.get('newContact') === 'true';

  return (
    <div className="w-6/12 h-full p-6 overflow-y-auto">
      {isNewContact ? (
        <NewContactForm />
      ) : (
        <ContactList setSelectedContact={setSelectedContact} />
      )}
    </div>
  );
}
