import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { ordered , restocked } from "./cakeSlices";



export const Cakeview = () => {
    // useSelector return selector 
  const numberOfCakes =   useSelector((state)=> state.cake.numberOfCakes);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cake - {numberOfCakes} </h2>
      <button onClick={()=>dispatch(ordered())} >Order Cake</button>
      <button onClick={()=>dispatch(restocked(5))} >Restock Cake</button>
    </div>
  );
};
