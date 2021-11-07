import React from 'react'
import { useDispatch } from "react-redux";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { editProduct, getProduct } from '../redux/actionuser';
const EditProduct = ({product}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState(product.name)
const [price, setPrice] = useState(product.price)   
const [quantite, setQuantite] = useState(product.quantite)
const dispatch = useDispatch()
  const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(editProduct(product._id,name,price,quantite))
      dispatch(getProduct())
      setName('')
      setPrice('')
      setQuantite('')
  }
    return (
        <div>
              <Button onClick={handleShow}>Edit</Button>
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

export default EditProduct
