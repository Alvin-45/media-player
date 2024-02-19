import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'


function Add() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-flex align-items-center">
        <h3>Upload A Video</h3>
        <button onClick={handleShow} className='btn bg-secondary ms-3 rounded-circle'><i className="fa-solid fa-plus"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Pleae fill the following Datails!!!</p>
        <div className='border-rounded border-secondary p-3'>
            <FloatingLabel
            controlId="floatingInputCaption"
            label="Video Caption"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputImg"
            label="Image URL"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Image URL" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputLink"
            label="Youtube Video Link"
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
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </> 
  )
}

export default Add