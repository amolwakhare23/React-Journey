import React, { useState } from 'react';

const App=()=>{

  const [name,setName]=useState("");

  const[fullName,setFullName]=useState();

  const onSubmit=()=>{
    setFullName(name);
  }

  const inputEvent= (event)=>{
   
    setName(event.target.value);
  }
  return(
    <>
     <div>

        <h1> Hello{fullName} </h1>
        
         <input type='text' 
           placeholder="Enter your Name"
           onChange={inputEvent}
           value={name}
      />
        <button onClick={onSubmit} >Click Me </button>

      </div>
    </>
);
};

export default App;
