import React from "react"
import './Newstore.css'
// import './Store.css'

const Newstorecard = (props) => {
    return (

        <div className='col-lg-3 col-md-3'>
            <p>{props.title}</p>
            <img src={props.img} alt='' style={{height: '250px', width: '300px'}} className="img-responsive img-fluid"></img>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h2>Price:{props.price}</h2>
            <button type='submit'>Add to Cart</button>
        </div>
    )
}

export default Newstorecard