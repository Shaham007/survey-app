import React from 'react';
import {useLocation} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


const Result = () => {
    const {state: {resultSet}} = useLocation();
    return(
     <div className="result">
         <div className="card">
         <h1>Results :</h1>
         <div>{Object.keys(resultSet).map((p,i)=>
         
         <div key={i} className="resultContainer">
             <div className='resultProgress'>
                 <h2>{p}:</h2>
                <CircularProgress variant="determinate" value={resultSet[p]} />
                <h2>{resultSet[p]}%</h2>
             {/* {`${p}: ${resultSet[p]}`} */}
             </div>
        </div>
         
         )}
         
         </div>
        
         </div>
        
    </div>
)};

export default Result;