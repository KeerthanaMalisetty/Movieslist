import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export function Details() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [movie,setmovie] = useState({});
  const getmovie = () => {
    fetch(
      `https://62bae5f9573ca8f8328e495e.mockapi.io/movies/${id}`,
    {
      method: "GET",
    })
     .then((data) => data.json())
     .then((mv) => setmovie(mv));
  }
  useEffect(()=> getmovie(),[]);


  // console.log({id});
  // console.log(movielist[id]);
  // const movie={
  //   name: "RRR",
  //   poster:
  //   "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  //   rating: 8.8,
  //   summary:
  //   "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  //   trailer:"https://www.youtube.com/embed/NgBoMJy386M"
  //   } ;
  // const movie = movielist[id];
  const ratings = {
    color: movie.rating > 8 ? "green" : "Red"
  };
  const [show, setshow] = useState(true);
  const parastyle = {
    display: show ? "block" : "none"
  };
  return (
    <div>
      {/* <img className='poster' src={movie.poster} /> */}
      <iframe width="100%"
        height="600"
        src={movie.trailer}
        title=""
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

      <div className='name-ctr'>
        <h1 className='movie-name'>{movie.name}</h1>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          <ArrowLeftIcon /> Back
        </Button>
        {/* <button onClick={()=> navigate(-1)}>back</button> */}
        <p className='rating' style={ratings}> ⭐{movie.rating}</p>
      </div>
      <button className='toogle' onClick={() => setshow(!show)}>Toogle</button>
      <p>{movie.summary}</p>

    </div>
  );
}
