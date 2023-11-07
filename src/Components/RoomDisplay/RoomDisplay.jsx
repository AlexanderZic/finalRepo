import React from 'react';
import RoomEditModal from '../RoomEditModal/RoomEditModal';
import './RoomDisplay.css';


import AddRoom from './AddRoom';

import DeleteRoom from './DeleteRoom'; // Import the DeleteRoom component
import UpdateRoom from './UpdateRoom';
import AllRooms from './AllRooms';
import RoomList from '../RoomList/RoomList';


const RoomDisplay = ( props ) => {
  if (!props.loggedIn) {
    // If the user is not logged in, don't render the RoomDisplay component.
    return null;
  }


  // Render the RoomDisplay component when the user is logged in.
  return (
    
    <div>
      <div className="available-rooms-container">

       <h2>All Rooms</h2>
       <AddRoom  token = {props.token} />
       <AllRooms/>


      </div>
      <div className="room-title">
        <div className="title-container">
          <h2>Room Title</h2>
          <RoomEditModal >
          
         
         

           </RoomEditModal>
           
           <UpdateRoom/> 

           <DeleteRoom /> 
       
         
         
          

        </div>
      </div>
    </div>
  );
}


export default RoomDisplay;