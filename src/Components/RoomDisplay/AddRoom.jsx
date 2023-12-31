import React from "react";
import { Button } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRooms(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addRoomRoute = "http://127.0.0.1:4000/room/rooms";

  const createRoom = async (e) => {
    e.preventDefault();

    console.log("testing this funtion");

    try {
      let response = await fetch(addRoomRoute, {
        headers: new Headers({
          "content-type": "application/json",
          authorization: props.token,
        }),
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
      });

      let results = await response.json();
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />

        <input
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit" onClick={createRoom}>
          {" "}
          Add Room
        </Button>
      </form>
    </div>
  );
}

export default AddRooms;
