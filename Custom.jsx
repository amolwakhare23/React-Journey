import React,{useState} from 'react';

function CustomHook() {
  
    const[sal,setSalary]=useState(30000);
    
    const incrementSalary=()=>{
      setSalary(sal+5000);
    }
    return{sal,incrementSalary}
  }
   
  export default CustomHook;