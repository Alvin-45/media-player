import React from 'react'
import { Link } from 'react-router-dom'

function Watch() {
  return (
    <>
    <div className="d-flex justify-content-around mt-5">
      <h3 style={{marginLeft:'-350px'}}>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none',color:'White'}}><i className="fa-solid fa-arrow-left" style={{color: '#ffffff'}}></i>Back to <i className="fa-solid fa-house" style={{color: '#ffffff'}}></i></Link>
    </div>
    <table className="table mt-5 mb-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Video Link</th>
          <th>Time Stamp</th>
          <th><i className="fa-solid fa-ellipsis-vertical" style={{color: '#ffffff'}} ></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>React JS</td>
          <td><a href="https://www.youtube.com/embed/VU23OPQ1Pmc" target='_blank'>https://www.youtube.com/embed/VU23OPQ1Pmc</a></td>
          <td>2024-02-19,12:27:14 PM</td>
          <td><i className="fa-solid fa-trash" style={{color:' #c70000'}}></i></td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Watch