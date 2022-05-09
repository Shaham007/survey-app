import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [value,setValue] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () =>{
    if(value !== "")
    {
      setError(false);
      navigate(`/Survey/${value}`);
    }
    else
    {
      setError(true);
    }
  }

  const handleChange = (e) => {
    const {value} =  e.target;
      setValue(value);
      setError(false);
  }
  
  return(
    <div className="home">
      <div className="card">
          <form className="form">
          <h1>Welcome to Psychological Safety Index Survey </h1>
          <br />
          <h2>Please Type Your Name:</h2>
          <TextField id="standard-basic" label="Name" variant="standard" onChange={handleChange}/>
          {error && (
                  <span className="err">Please enter Name</span>
                )}
            <Button size="small" onClick={handleClick} variant="contained" endIcon={<SendIcon />}>
              Survey Page
            </Button>

          </form>

      </div>
    </div>
)}

export default Home;