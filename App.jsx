import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
             <Tooltip title="Add">
               <Button onClick={incre}><AddIcon/></Button>
               </Tooltip>
               <Tooltip title="Delete">
               <Button onClick={decre}><DeleteIcon/></Button>
               </Tooltip>
              </div>
          </div>
         </div>
        </>
    )
}

export default App;