// import React from 'react';
import { useParams } from "react-router-dom"

function User() {
    const {id} = useParams();
  return (
    <div className="text-white text-3xl py-3">The userId is {id}</div>
  )
}

export default User