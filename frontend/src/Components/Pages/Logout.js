import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const Logout = ({setLoginUser}) => {
    const nav = useNavigate();
  return (
    <>
      <div>



      </div>
      < Button onClick={() => setLoginUser({})}>Logout</Button>
    `{ nav('/')}`
    </>
  );
};
