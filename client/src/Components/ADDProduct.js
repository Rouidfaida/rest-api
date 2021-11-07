import React, { useState } from 'react'
import { addProduct, getProduct } from '../redux/actionuser';
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';


const ADDProduct = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState("")
const [price, setPrice] = useState("")   
const [quantite, setQuantite] = useState("")
const dispatch = useDispatch()
  const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(addProduct(name,price,quantite))
      dispatch(getProduct())
      setName('')
      setPrice('')
      setQuantite('')
  }
    return (
        <div>
              <Button onClick={handleShow}>add product</Button>
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
              price
            </Form.Label>
            <Col sm="10">
              <input
                type="text"
                value={price}
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              quantite
            </Form.Label>
            <Col sm="10">
              <input
                type="text"
                value={quantite}
                placeholder="quatite"
                onChange={(e) => setQuantite(e.target.value)}
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

export default ADDProduct
