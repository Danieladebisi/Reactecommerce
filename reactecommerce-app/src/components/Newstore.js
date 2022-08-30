import React from 'react'
import Newstorecard from './Newstorecard'
import Newstoredic from './Newstoredic'
import './Newstore.css'



const displayData = (display) =>{
    return(
        <Newstorecard
        title={display.title}
        img={display.img}
        name={display.name}
        description={display.description}
        price={display.price}></Newstorecard>
    )
}

const Newstore = () => {
    return (
      <div className='container-fluid '>
          <div className='row parent'>
              {Newstoredic.map(displayData)}
          
          </div>
      </div>
    )
  }

export default Newstore