import React from 'react'
import StoreCard from './Newstorecard'
import Storedic from './Newstoredic'
import './Newstore.css'



const displayData = (display) =>{
    return(
        <StoreCard
        title={display.title}
        img={display.img}
        name={display.name}
        description={display.description}
        price={display.price}></StoreCard>
    )
}

const Store = () => {
    return (
      <div className='container-fluid '>
          <div className='row parent'>
              {Storedic.map(displayData)}
          
          </div>
      </div>
    )
  }

export default Store