import React from "react";
import { Button } from "reactstrap";
import "./UpdateRoom.css";

const UpdateRoom = ({ roomId, onUpdate }) => {
  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/updateRooms/${roomId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Successful update
        console.log("Room updated successfully.");
        onUpdate(roomId); // _id
      } else {
        console.error("Room update failed.");
      }
    } catch (error) {
      console.error("Update room error:", error);
    }
  };

  return (
    <div className="update-button">
      <Button onClick={handleUpdate} className="custom-button">
        Update Room
      </Button>
    </div>
  );
};

export default UpdateRoom;
