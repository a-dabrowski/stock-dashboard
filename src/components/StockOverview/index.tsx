import React, {useEffect, useState} from 'react';
import {Api, TickerInfo, getSingleStock} from 'api';
import { useParams } from 'react-router-dom';

function StockOverview() {
  const { id } = useParams();
  return (
    <div>
      <h1>{ id }</h1>
    </div>
  )
}

export default StockOverview;
