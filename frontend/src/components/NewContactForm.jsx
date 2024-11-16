import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Grid2 as Grid } from '@mui/material'; // Using Grid2 as Grid
import { showToast } from '../utils/toast.js';
import BackendURL from '../utils/config.js';



function NewContactForm({updateContact}) {

  const[updateContactID , setUpdateContactID] = updateContact;

  const [Update , setUpdate] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
  });

  const getOldContact = async() => {
    console.log("trying to get old contact");
    const response = await fetch(`${BackendURL}/api/contacts/${updateContactID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    setFormData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      jobTitle: data.jobTitle,
    });

    console.log("upated form data")
    console.log(formData);
  }

  if(updateContactID && Update == false){
    setUpdate(true);
    getOldContact();  
  }
  console.log(Update);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    showToast('Adding contact...', 'loading');
    try{

      const response = await fetch(`${BackendURL}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
      )
      showToast('','dismiss')
      if(response.ok){
        const data = await response.json();
        showToast('Contact added successfully', 'success');
        navigate('/'); // Redirect to home page
      }else{
        const error = await response.json();
        showToast(error.message, 'error');
      }
      
    }catch(error){
      showToast('','dismiss')
      showToast(error.message, 'error');
      console.log(error);
    }
    
  };

  //Handle updation
  const handleUpdateSubmit = async(e) => {
    e.preventDefault();
    showToast('Updating contact...', 'loading');
    try{
      const response = await fetch(`${BackendURL}/api/contacts/${updateContactID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
      )
      showToast('','dismiss')
      if(response.ok){
        const data = await response.json();
        showToast('Contact updated successfully', 'success');
        setUpdate(false);
        setUpdateContactID(null);
        navigate('/'); // Redirect to home page
      }else{
        const error = await response.json();
        showToast(error.message, 'error');
      }
    }catch(error){
      showToast('','dismiss')
      showToast(error.message, 'error');
      console.log(error);
    }

  }

  return (
    <div className="max-h-screen  flex flex-col items-center bg-gradient-to-r from-blue-900 via-purple-900 to-black px-4 mt-20 py-5  text-white font-Rubik">
      <NavLink to="/" className="mb-4 text-blue-300 hover:text-blue-500 text-lg">
        ← Back to Home
      </NavLink>

      <Box
        component="form"
        onSubmit={ updateContactID ? handleUpdateSubmit : handleSubmit}
        className="bg-zinc-900 p-6 rounded-xl shadow-xl"
      >
        <Typography variant="h4" className="text-center pb-6 font-semibold text-white">
          {Update ? "Update Contact Form" : " New Contact Form"}
        </Typography>

        {/* Reuse FormGrid component for form fields */}
        <Grid container spacing={3}>
          <FormGrid
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            handleInputChange={handleInputChange}
          />
          <FormGrid
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            handleInputChange={handleInputChange}
          />
          <FormGrid
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            handleInputChange={handleInputChange}
          />
          <FormGrid
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            handleInputChange={handleInputChange}
          />
          <FormGrid
            label="Company"
            name="company"
            type="text"
            value={formData.company}
            handleInputChange={handleInputChange}
          />
          <FormGrid
            label="Job Title"
            name="jobTitle"
            type="text"
            value={formData.jobTitle}
            handleInputChange={handleInputChange}
          />
        </Grid>

        {/* Submit Button */}
        <Box className="mt-6 flex justify-center w-full">
          <Button
            type="submit"
            variant="contained"
            size="large"
            className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white hover:bg-gradient-to-l"
            sx={{
              borderRadius: '10px',
              padding: '5px 40px',
              fontSize: '1rem',
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default NewContactForm;


// Reusable Grid Component
function FormGrid({ label, name, type, value, handleInputChange }) {
  return (
    <Grid item xs={12} className="w-full">
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        name={name}
        value={value}
        onChange={handleInputChange}
        required
        type={type}
        className="bg-zinc-800 text-white rounded-lg"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        InputProps={{
          style: { color: '#fff' },
        }}
      />
    </Grid>
  );
}