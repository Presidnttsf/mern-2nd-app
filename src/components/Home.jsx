import React from 'react'
import CheckApi from './CheckApi';
import Counter from './Counter';
import Calculator from '../tsf-components/mini-projects/Calculator';
import CalculatorWithKb from '../tsf-components/mini-projects/CalculatorWithKb';
import GetDataAxios from './GetDataAxios';


export default function Home() {
 
    const [show, setshow] = React.useState(false);

    return (
    <div>
    <h1>Home Page</h1>    
    {show ? <Counter /> : null}
      
      <button onClick={() => setshow(prev => !prev)}>{show? "Hide counter":"Click to see counter"}</button> 
     {/* <Calculator/> */}
     {/* <CalculatorWithKb/> */}
     {/* <CheckApi/> */}
     <GetDataAxios/>
     
        </div>
  )
}
