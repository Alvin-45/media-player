import React from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from './Category'

function Home() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
  <Add/>
  <Link to={"/watch"}>View Histoty</Link>
      </div>
      <div className="container-fluid mt-5 mb-5 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View/>
        </div>
        <div className="col-lg-6">
          <div className='d-flex justify-content-between'>
            {/* <h3>All Categories</h3> */}
            <Category/>
            </div> 
        </div>
      </div>

       </>
    )
   
}

export default Home