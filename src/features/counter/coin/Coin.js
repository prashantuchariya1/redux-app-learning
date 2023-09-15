import React from 'react'
import { useSelector } from "react-redux";
export default function Coin(props) {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
         <span className="value"> Coin: {count} </span>
    </div>
  )
}
