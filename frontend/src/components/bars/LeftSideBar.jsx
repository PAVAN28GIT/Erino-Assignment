import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import logo from '../../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import BusinessIcon from '@mui/icons-material/Business';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

function SideBar() {
  const navigate = useNavigate();

  const handleAddContact = () => {
    console.log('Add Contact');
    navigate('/?newContact=true');
  };

  return (
    <div className="h-full w-2/12 bg-black flex flex-col text-white py-10 space-y-12 px-5 border-r border-zinc-700 font-Rubik">
      {/* Logo */}
      <div className="flex items-center px-2">
        <img src={logo} alt="logo" className="w-10" />
        <span className="text-xl text-white ml-4">ContactSync</span>
      </div>

      {/* Search */}
      <div className="flex items-center px-4 mb-6 border border-zinc-800 py-1 rounded-xl bg-zinc-800">
        <SearchIcon className="mr-2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-gray-300 placeholder-gray-400"
        />
      </div>

      {/* Sidebar Links */}
      <div className="space-y-3 px-4">
        <SidebarIcon icon={<PermContactCalendarIcon />} text="All People" to="/" />
        <SidebarIcon icon={<BusinessIcon />} text="All Businesses" to="/not-found" />
        <SidebarIcon icon={<StarIcon />} text="Favorites" to="/not-found" />
        <SidebarIcon icon={<EventAvailableIcon />} text="Event" to="/not-found" />
      </div>

      {/* Add Contact Button */}
      <div className="px-4 mt-10">
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          fullWidth
          onClick={handleAddContact}
          sx={{
            backgroundColor: '#007aff',
            '&:hover': { backgroundColor: '#005bb5' },
          }}
        >
          Add Contact
        </Button>
      </div>
    </div>
  );
}

// Sidebar Icon component with NavLink
function SidebarIcon({ icon, text, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center space-x-2 text-white text-base px-2 py-1 rounded transition duration-200 ${
          isActive ? 'bg-gray-700' : 'hover:bg-gray-800'
        }`
      }
    >
      <span className="text-gray-400">{icon}</span>
      <span>{text}</span>
    </NavLink>
  );
}

export default SideBar;
