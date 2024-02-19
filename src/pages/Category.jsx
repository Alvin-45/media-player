import React, { useState } from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
      <div className="d-flex align-items-center">
        <h3>All Category</h3><button onClick={handleShow} className='btn bg-info ms-3 rounded-circle'><i className="fa-solid fa-plus"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Pleae fill the following Datails!!!</p>
        <div className='border-rounded border-secondary p-3'>
            <FloatingLabel
            controlId="floatingInputCaption"
            label="Category Namee"
            className="mb-3"
          >
            
            <Form.Control type="text" placeholder="Youtube Video Link" />
          </FloatingLabel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add Category</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  )
}

export default Category