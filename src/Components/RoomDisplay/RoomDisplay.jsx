import React from 'react';
import './RoomDisplay.css';
import DeleteRoom from './DeleteRoom'; // Import the DeleteRoom component

const RoomDisplay = ({ loggedIn }) => {
  if (!loggedIn) {
    // If the user is not logged in, don't render the RoomDisplay component.
    return null;
  }

  // Render the RoomDisplay component when the user is logged in.
  return (
    <div>
      <div className="available-rooms-container">
        <h2>Available Rooms</h2>
      </div>
      <div className="room-title">
        <div className="title-container">
          <h2>Room Title</h2>
          <DeleteRoom />
        </div>
      </div>
    </div>
  );
}

export default RoomDisplay;