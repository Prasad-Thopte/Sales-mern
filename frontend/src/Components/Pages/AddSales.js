import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import "../css/style.css";
import { useNavigate } from 'react-router-dom';

function AddSales({setLoginUser}) {
  const [user, setUser] = useState({
    id: "",
    pname: "",
    qty: "",
    amt: "",
    
    
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const addsale = async () => {
    const { pname, qty, amt, } = user;
    if (pname && qty && amt  ) {
      await axios
        .post("http://localhost:9002/addproduct", user)
        .then((res) => alert(res.data.message));

        navigate('/')
      // alert("Confirm")
    } else {
      alert("Invalid Data");
    }
  };

 
  return (
    <>
      <Container>
      <div className='text'>
      <h3>Add Sale Entry</h3></div>
      <div className='fm'>
    <Form>
  
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Product Name</Form.Label>
        <Form.Control placeholder="" name="pname"
                  value={user.pname} onChange={ handleChange } required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Quantity</Form.Label>
        <Form.Control placeholder="" name="qty" type='number'
                  value={user.qty} onChange={ handleChange } required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Amount</Form.Label>
        <Form.Control placeholder="" name="amt" type='number'
                  value={user.amt} onChange={ handleChange } required />
      </Form.Group>

     

      <Button className='btn' variant="primary" type="submit"  onClick={addsale}>
        Submit
      </Button>
    </Form>
    </div>
    </Container>
</>  );
}

export default AddSales;