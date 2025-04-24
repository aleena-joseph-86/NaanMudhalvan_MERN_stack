import React from "react";

function User(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.rollno}</p>
      <img src={props.image}></img>
    </div>
  );
}

export default User;


