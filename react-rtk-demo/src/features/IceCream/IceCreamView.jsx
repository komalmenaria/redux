import React , {useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { ordered , restocked } from './icecreamSlice';

export const IceCreamView = () => {
    const [value, setValue] = useState(1)
    const numberOfIcecream = useSelector((state)=>state.icecream.numberOfIcecream);
    const dispatch = useDispatch()
  return (
    <div>
         <h2>Number of Icecream - {numberOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <input  type='num' value={value} onChange={(e) => setValue(parseInt(e.target.value))}  placeholder='enter restock value'/>
      <button onClick={() => dispatch(restocked(value))} >Restock IceCream</button>
    </div>
  )
}
