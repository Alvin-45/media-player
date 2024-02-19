import React from 'react'
import { Card, Modal } from 'react-bootstrap'
import { useState } from 'react';
function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className='shadow' onClick={handleShow} style={{width:'200px'}}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
            <p>React</p>
      <button className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
        </Card.Title>  
      </Card.Body>
    </Card> 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="314" src="https://www.youtube.com/embed/VU23OPQ1Pmc?autoplay=1" title="Sai Abhyankkar - Katchi Sera (Music Video) | Samyuktha | Ken Royson | Think Indie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard