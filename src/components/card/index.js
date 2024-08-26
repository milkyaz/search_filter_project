import React from "react";

const Card = ({ userInfo }) => {
  const { firstName, lastName, email } = userInfo;
  return (
    <div className="user_card">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </div>
  );
};

export { Card };
