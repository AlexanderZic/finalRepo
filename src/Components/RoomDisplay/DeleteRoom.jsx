import React, {useState} from 'react';
import { Button } from 'reactstrap';
import AllRooms from './AllRooms';





const DeleteRoom = ({ roomId, rooms, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/room/deleteRooms/${roomId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
   
        console.log(`Room "${rooms.title}" deleted successfully.`);
        onDelete(roomId);
      } else {
        console.error(`Room "${rooms.title}" deletion failed.`);
      }
    } catch (error) {
      console.error('Delete room error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>
        Delete Room
      </button>
    </div>
  );
};

export default DeleteRoom;



// const DeleteRoom = {room, onDelete } => {
//   const handleDelete = async () => {

// try{
//           const response = await fetch(`/api/deleteRooms/${roomId}`, {
//             method: 'DELETE',
//             headers: {
//               'Content-Type': 'application/json',
              
//             },
//           });
    
//           if (response.ok) {
//             // Successful deletion
//             console.log('Room deleted successfully.');
//             onDelete(roomId); 
//           } else {
//             console.error(`Room ${room.title} deletion failed.`);
//           }
//         } catch (error) {
//           console.error('Delete room error:', error);
//         }

//   return (
//     <div><div>
//     <button>
//       {rooms.map((room, index) => (
//         <div key={room.id}>
//           <span>{room.title}</span>
//           <DeleteRoom roomId={room.id} room={room} onDelete={handleDeleteRoom} />
//         </div>
//       ))}
//     </button>
//   </div>
//   </div>
//   )
// }


  


// export default DeleteRoom




  // const handleDelete = async () => {
    
//   //   try {
//   //     const response = await fetch(`/api/deleteRooms/${roomId}`, {
//   //       method: 'DELETE',
//   //       headers: {
//   //         'Content-Type': 'application/json',
          
//   //       },
//   //     });

//   //     if (response.ok) {
//   //       // Successful deletion
//   //       console.log('Room deleted successfully.');
//   //       onDelete(roomId); 
//   //     } else {
//   //       console.error(`Room ${room.title} deletion failed.`);
//   //     }
//   //   } catch (error) {
//   //     console.error('Delete room error:', error);
//   //   }
  
//   // }
//   // return (
//   //   <div className="delete-button">
//       <Button onClick={handleDelete} className="custom-button">
//         Delete Room
//       </Button>
//     </div>
//   );
  

// export default DeleteRoom;