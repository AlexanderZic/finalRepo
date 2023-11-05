import React from 'react'
import{ Card, CardBody, ListGroup, ListGroupItem, CardLink, CardTitle, CardText } from 'reactstrap'
import { useState } from 'react'


function AllRooms() {

    const [showRooms, setShowRooms] = useState ('')
    
    const showRoomRoute = 'http://127.0.0.1:4000/room/list';


    async function showTheRooms (e) {
        e.preventDefault();

        console.log ('testing this function ');

        try {
            let response = await fetch (showRoomRoute)
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div>AllRooms

<Card
  style={{
    width: '18rem'
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
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
  <CardBody>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Card Link
    </CardLink>
  </CardBody>
</Card>


    </div>
  )
}

export default AllRooms