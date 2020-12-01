import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from './styles';

function Home() {
  const [user, setUser] = useState({});

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  function saveUser() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;

    console.log(email, password, name, phone);
    setUser({ email, password, name, phone });
  }

  return (
    <Container>
      <Form>
        <h1>Registration Form</h1>
        <br />
        <Form.Group controlId="formBasicName">
          <Form.Label>Name: </Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-label">Email address: </Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone: </Form.Label>
          <Form.Control ref={phoneRef} type="text" placeholder="Phone" />
        </Form.Group>
        <Button onClick={saveUser} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
