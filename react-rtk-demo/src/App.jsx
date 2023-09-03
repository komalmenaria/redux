import {  } from 'react'
import './App.css'
import { Cakeview } from './features/Cake/Cakeview';
import { IceCreamView } from './features/IceCream/IceCreamView';
import { UserView } from './features/User/UserView';

function App() {

  return (
    <>
     <Cakeview />
     <IceCreamView />
     <UserView />
       
    </>
  )
}

export default App
