import React from 'react'
import Watchlist from './Watchlist';

const LeftPanel = () => {
  return (
    <>
        <>
          <div className='container-fluid'>
             <div className='row'>
                <div className='col-md-12'>
                  <Watchlist />
                </div>
             </div>
          </div>
        </>
    </>
  )
}

export default LeftPanel