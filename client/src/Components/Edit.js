import React from 'react'
import { editUser } from '../redux/actionuser';
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { getUser } from "../redux/actionuser";
import { useDispatch } from "react-redux";
const Edit = ({user}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [number, setNumber] = useState(user.number)
  const dispatch = useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(editUser(user._id,name,email,number))
    dispatch(getUser())
 
}
    return (
        <div>
           <Button onClick={handleShow}>edit</Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add new Movies</Modal.Title>
        </Modal.Header>
        <Form
          style={{ marginLeft: "10px", marginTop: "10px" }}
          onSubmit={handleSubmit}
        >
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              name
            </Form.Label>
            <Col sm="10">
              <input
                type="text"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              email
            </Form.Label>
            <Col sm="10">
              <input
                type="text"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              number
            </Form.Label>
            <Col sm="10">
              <input
                type="text"
                value={number}
                placeholder="number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
          
         
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>   
        </div>
    )
}

export default Edit
