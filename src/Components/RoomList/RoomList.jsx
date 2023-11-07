import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RoomList() {
    const [rooms, setRooms, navigate, setNavigate] = useState ([])
    
  
    const navigateToRoom = (roomId) => {
    
       navigate(`/room/${roomId}`);

    };
    return (
        <div>
          {rooms.map((room, index) => (
            <div key={room.id}>
              <span>
              
                <Link to={`/room/${room.id}`}>{room.title}</Link>
              </span>
              <button onClick={() => navigateToRoom(room.id)}>Go to Room</button>
            </div>
          ))}
        </div>
      );
    }
    
    
export default RoomList