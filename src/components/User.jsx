import React from "react";

const User = ({ name, gender, email }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{gender}</p>
      <p>{email}</p>
      <hr />
    </li>
  );
};

export default User;
