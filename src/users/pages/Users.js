import React from "react";
import UserList from "../components/UserList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "asad",
      image:
        "https://images.unsplash.com/photo-1692272809300-6a7af9b2a6e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      places: 3,
    },
  ];
  return <UserList item={USERS} />;
}

export default Users;
