import React from 'react'
import Filter from './FilterPanel/Filter'
import List from './List'
import './marketPlace.css'

const MarketPlace = () => {
  
  return (
    <div>
      <div className="market">
        <div className="panelList-wrap">
          <div className="hidden panel-wrap md:block">
            <Filter />
          </div>
          <div className="list-wrap">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace
