import React, { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { Container } from './styles';

function Home() {
  const [user, setUser] = useState({});

  const emailRef = useRef();
  const passwordRef = useRef();

  function saveUser(email, password) {
    console.log(email, password);
  }

  return (
    <Container>
      <Form>
        <h1>Registration Form</h1>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-label">Email address: </Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={() => { saveUser(emailRef.current.value, passwordRef.current.value) }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Home;