import React, { useState } from 'react';

const App =()=>{
  const[num,setNum]=useState(0);

  const incre =()=>{
    setNum(num+1);
  }

  const decre=()=>{
    if(num>0)
    setNum(num-1);
    else
    setNum(0);

  }
    return(
        <>
        <div className="main_div">
          <div className="center_div">
             <h1>{num}</h1>
             <div className="btn_div">
               <button onClick={incre}>Increment</button>
               <button onClick={decre}>Decrement</button>
              </div>
          </div>
         </div>
        </>
    )
}

export default App;