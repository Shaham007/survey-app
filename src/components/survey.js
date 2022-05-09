import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

const Survey = () => {

    const [resultSet, setResultSet] = useState(
        {
          Question1: 0,
          Question2: 0,
          Question3: 0
        }
      )
      const { user } = useParams();

    const getSliderValue = (event, param) => {
        const { value} =  event.target;
        setResultSet(prevState => ({
            ...prevState,
            [param]: value
          }));
    }

    return(
        <div className='survey'>
        <div className="welcomeText"><h1>{`Hello ${user}!!`} </h1>
        </div>
        <div className='card'>
            <div className='row'>
                <div className='questionRow'>
                <h2>Q1: </h2>
                <h2>If you make a mistake on this team. <br/> It is often hold against you ?</h2>
                </div>
            </div>
            <div className="row">
                <div className='sliderContainer'>
                    <Slider
                    aria-label="Temperature"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={0}
                    max={100}
                    onChange={(e) => getSliderValue(e,'Question1')}
                    />
                    <div className="paraContainer">
                        <div className="para">
                        <p>Strongly Agree</p>
                        <p>Strongly Disagree</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
            <div className='questionRow'>
                <h2>Q2: </h2>
                <h2>It is safe to take a risk on this team ?</h2>
                </div>
            </div>
            <div className="row">
                <div className='sliderContainer'>
                    <Slider
                    aria-label="Temperature"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={0}
                    max={100}
                    onChange={(e) => getSliderValue(e,'Question2')}
                    />
                    <div className="paraContainer">
                        <div className="para">
                        <p>Strongly Agree</p>
                        <p>Strongly Disagree</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
            <div className='questionRow'>
                <h2>Q3:</h2>
                <h2> Working with members of this team,<br/> my unique skills and talents <br/> are valued and utilized ?</h2>
                </div>
            </div>
            <div className="row">
                <div className='sliderContainer'>
                    <Slider
                    aria-label="Temperature"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={0}
                    max={100}
                    onChange={(e) => getSliderValue(e,'Question3')}
                    />
                    <div className="paraContainer">
                        <div className="para">
                        <p>Strongly Agree</p>
                        <p>Strongly Disagree</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="btn btn-primary" to={'/result'} state={{ resultSet }}>
                <Button variant="contained">Submit</Button>
            </Link>        
        </div>   
    </div>
)};

export default Survey;