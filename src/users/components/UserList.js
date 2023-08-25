import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";

function UserList(props) {
  if (props.item.length === 0) {
    return <h2 className="center">No user found</h2>;
  }
  return (
    <ul className="users-list">
      {props.item.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          placeCount={user.place}
          image={user.image}
          name={user.name}
        />
      ))}
    </ul>
  );
}

export default UserList;
