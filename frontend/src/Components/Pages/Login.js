import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container } from 'react-bootstrap';
export const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async () => {
    await axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
    });

    navigate("/");
  };

  return (
    <>
    <Container>
      <div className='text'>
        <h3>Login</h3></div>
      <div className='fm'>
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="" autoComplete='off'
               name="email" value={user.email} onChange={handleChange} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" autoComplete='off'
             name="password" value={user.password}  onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit"  onClick={login}>
            Submit

          </Button>
        
      </div>
    </Container>
  </>
  );
};
