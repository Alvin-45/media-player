import React from 'react'
import { Card, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { saveHistoryAPI } from '../services/allAPI';
function VideoCard({displayData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const {caption,youtubeLink}=displayData
    let timeData=new Date()
    let timeStamp=new Intl.DateTimeFormat('en-US',{
      year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
    }).format(timeData)
    console.log(timeStamp);
    await saveHistoryAPI({caption,youtubeLink,timeStamp})
  }
  return (
    <>
      <Card className='shadow' onClick={handleShow} style={{width:'200px',height:'350px'}}>
      <Card.Img variant="top" style={{height:'200px'}} src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
            <p>{displayData.caption}</p>
      <button className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
        </Card.Title>  
      </Card.Body>
    </Card> 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="314" src={displayData.youtubeLink} title="Sai Abhyankkar - Katchi Sera (Music Video) | Samyuktha | Ken Royson | Think Indie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard