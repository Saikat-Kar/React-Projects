import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const data = useParams();
  console.log(data);
  return <div className="text-3xl text-center">Pareameter is : {data.id}</div>;
}

export default User;
