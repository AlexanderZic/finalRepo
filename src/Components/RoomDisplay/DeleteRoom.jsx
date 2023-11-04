import React from 'react';
import { Button } from 'reactstrap';

const DeleteRoom = ({ roomId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/deleteRooms/${roomId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          
        },
      });

      if (response.ok) {
        // Successful deletion
        console.log('Room deleted successfully.');
        onDelete(roomId); 
      } else {
        console.error('Room deletion failed.');
      }
    } catch (error) {
      console.error('Delete room error:', error);
    }
  };

  return (
    <div className="delete-button">
      <Button onClick={handleDelete} className="custom-button">
        Delete Room
      </Button>
    </div>
  );
};

export default DeleteRoom;