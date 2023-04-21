import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
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

  const register = async () => {
    const { fname, lname, email, password } = user;
    if (fname && lname && email && password ) {
      await axios
        .post("http://localhost:9002/register", user)
        .then((res) => alert(res.data.message));

        navigate('/login')
      // alert("Confirm")
    } else {
      alert("Invalid Data");
    }
  };

  return (
    <>
        <Container>
          <div className='text'>
            <h3>Register</h3></div>
          <div className='fm'>
            
              <Form.Group className="mb-3" >
                <Form.Label>First Name</Form.Label>
                <Form.Control input type='text'
                  placeholder="" autoComplete="off"
                  name="fname"
                  value={user.fname} onChange={ handleChange } required />

              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="" autoComplete="off" type="text"
                  name="lname"
                  value={user.lname} onChange={ handleChange } required />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  placeholder="" autoComplete="off" type="email"
                  name="email"
                  value={user.email} onChange={ handleChange } required />

              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="" autoComplete="off" type="password"
                  name="password"
                  value={user.password}  onChange={ handleChange }required />
              </Form.Group>

              <Button variant="primary" type="submit"

                onClick={register}
              >
                Submit
              </Button>
            
          </div>
        </Container>
      </>
  );
};
