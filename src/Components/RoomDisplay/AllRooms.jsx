import React from 'react'
import{ Card, CardBody, ListGroup, ListGroupItem, CardLink, CardTitle, CardText } from 'reactstrap'
import { useState, useEffect, useCallback } from 'react'
import DeleteRoom from './DeleteRoom'


function AllRooms() {

    const [showRooms, setShowRooms] = useState ('')
    const [rooms, setRooms] = useState ([])
    
    const showRoomRoute = 'http://127.0.0.1:4000/room/allRooms';

    
// new comment
    // async function showTheRooms (e) {
    //     e.preventDefault();

    //     console.log (showTheRooms);

    //     try {
    //         let response = await fetch (showRoomRoute)
    //         if (response.ok) {
    //             const data = await response.json ()
    //             setRooms(data.rooms)

    //         } else {
    //             console.error('Failed to fetch rooms')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const showTheRooms = useCallback(async () => {
        try {
          const response = await fetch(showRoomRoute);
          if (response.ok) {
            const data = await response.json();
            setRooms(data.rooms);
          } else {
            console.error('Failed to fetch rooms');
          }
        } catch (error) {
          console.error(error);
        }
      }, [showRoomRoute]);


// fetch (showRoomRoute)
// .then (response => response.json)
// .then (data => ListGroupItem(data))
// .catch (err => console.error(err))

// function showRoomList (data) {
//     let htmlContent = "";


    


// }


    useEffect (()=> 
        // async function fetchRooms () 

        {  showTheRooms()
        //     try {
        //         const response = await fetch (showRoomRoute)
        //         if (response.ok) {
        //             const data = await response.json ();

        //         } else {
        //             console.error('Failed to fetch rooms')
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
        // fetchRooms ();
    }, [showTheRooms]);
    
  return (
    <div>

<Card
  style={{
    width: '18.2rem'
  }}
>
  {/* <img
    alt="Card"
    src="https://picsum.photos/300/200"
  /> */}

  {/* 
  

  Get our array of Rooms 
  via fetch

  take the array of rooms and make a new list group item for eah room and display that within the list group 


  Map .map return some info on the page inluding the room title display and button/ 
   */}
  <CardBody>
    <CardTitle tag="h5">
  ALL ROOMS DISPLAYED
    </CardTitle>
    <CardText>
      This is some text within a card body.
    </CardText>
  </CardBody>
  <ListGroup flush>
    {rooms.map((room,index) => (
    <ListGroupItem key = {index}>{room.title}</ListGroupItem>
    // <DeleteRoom room = {room} onDelete = {handleDeleteRoom}>

    ))}
    WE GOT CARDS
{/*     
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>

  <CardBody>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Card Link */}
    {/* </CardLink> */}
  {/* </CardBody> */}

  </ListGroup>
</Card>


    </div>
  )
}

export default AllRooms