import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='container-fluid fontstyle' style={{backgroundColor: "#E4E4F1", cursor: "pointer"}}>
        <div className='row d-flex align-items-center justify-content-between p-3'>
            <div className='col-md-3 d-flex justify-content-evenly align-items-center'>
                <a className='fs-4 fw-bold text-decoration-none text-black'>TradeBazaar <i className="fa-solid fa-arrow-trend-up"></i></a>
            </div>

            <div className='col-md-7 d-flex justify-content-evenly align-items-center'>
                <a className='fs-5 text-decoration-none text-black'>Home <i className="fa-solid fa-house"></i></a>
                
                <a className='fs-5 text-decoration-none text-black'>DashBoard <i className="fa-solid fa-table-columns"></i></a>

                <a className='fs-5 text-decoration-none text-black'>Orders <i className="fa-regular fa-credit-card"></i></a>

                <a className='fs-5 text-decoration-none text-black'>Holdings <i className="fa-solid fa-hand-holding-dollar"></i></a>

                <a className='fs-5 text-decoration-none text-black'>Positions <i className="fa-solid fa-map-pin"></i></a>
                
                <a className='fs-5 text-decoration-none text-black'>Funds <i className="fa-regular fa-money-bill-1"></i></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar