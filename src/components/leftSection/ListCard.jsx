import React from 'react'

const ListCard = ({stock_name, percent, price, PL}) => {
  return (
    <>
      <div className='container-fluid p-2 fontstyle'>
        <div className='row'>
          <div className='col-md-12 p-3 card'>
            <div className='d-flex justify-content-between align-items-center'>
               <p className='fw-semibold'>{stock_name}</p>
               <div className='d-flex'>
                 <button className='btn btn-outline-primary mx-1'>Buy</button>
                 <button className='btn btn-outline-danger mx-1'>Sell</button>
               </div>
               <div className='d-flex'>
                 <p className='mx-1 fw-semibold' style={{color:`${PL}`}}>{percent}</p>
                 <p className='mx-1 fw-semibold'>{price}</p>
               </div>
            </div>     
          </div>
        </div>
      </div>
    </>
  )
}

export default ListCard