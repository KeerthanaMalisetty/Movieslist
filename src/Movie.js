import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function Movie({ movie, id ,deletebutton, editbutton}) {
  const navigate = useNavigate();
  const ratings = {
    color: movie.rating > 8 ? "green" : "Red"
  };
  const [show, setshow] = useState(true);
  const parastyle = {
    display: show ? "block" : "none"
  };
  return (
    <Card className='movie-container'>
      <img className='poster' src={movie.poster} />
      <CardContent>
        <div className='name-ctr'>
          <h1 className='movie-name'>{movie.name}
            <IconButton aria-label="info" color='primary' onClick={() => setshow(!show)}>
              {!show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
            <IconButton aria-label="info" color='primary' onClick={() => navigate(`/films/${id}`)}>
              <InfoIcon />
            </IconButton>
          </h1>
          <p className='rating' style={ratings}> ⭐{movie.rating}</p>
        </div>
        {show ? <p className='summary' style={parastyle}>{movie.summary}</p> : null}
        {/* <button className='toogle' onClick={() => setshow(!show)}>Toogle</button> */}
        {/* <button onClick={()=> navigate(`/films/${id}`)}>Info</button> */}
      </CardContent>
      <CardActions>
        <Counter /> {deletebutton} {editbutton}
      </CardActions>
      {/* conditional styling */}
      {/* <p className='summary'style={parastyle} >{movie.summary}</p> */}
      {/* conditional rendering */}

    </Card>
  );
}
