import { useState ,useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate ,useParams } from "react-router-dom";

export function Editmovie() {
  const { id } = useParams();
  const [movie,setmovie] = useState(null);
  const getmovie = () => {
    fetch(
      `https://62bae5f9573ca8f8328e495e.mockapi.io/movies/${id}`,
    {
      method: "GET",
    })
     .then((data) => data.json())
     .then((mv) => setmovie(mv));
  }

   useEffect(()=> getmovie(),[])

 return (
  movie ? <Editform movie={movie} /> : "Loading.."
 );
}


function Editform({movie}){
  

  const navigate= useNavigate();

  const [name, setname] = useState(movie.name);
  const [poster, setposter] = useState(movie.poster);
  const [rating, setrating] = useState(movie.rating);
  const [summary, setsummary] = useState(movie.summary);
 

 const editmovie = () => {
  const updatemovie = {
    name: name, 
    poster: poster,
    rating: rating,
    summary: summary,
  };
  // console.log(newmovie);
  // setmovielist([...movielist, newmovie]);
  //put method
 //1.method-put & id
 //2. body-- we should pass new data  in body and in json format
 //3.in headres we should mention we r passing json data 

 
  fetch(`https://62bae5f9573ca8f8328e495e.mockapi.io/movies/${movie.id}`,
  {
    method: "PUT",
    body: JSON.stringify(updatemovie),
    headers: {
      "Content-Type": "application/json",
    }
  })
   .then(()=> navigate("/films"));
 }


  return (
    <div className="add-form">
      <TextField id="outlined-basic" variant="outlined" label="poster" value={poster} onChange={(event) => setposter(event.target.value)} />
      <TextField id="outlined-basic" variant="outlined" label="name"  value={name} onChange={(event) => setname(event.target.value)} />
      <TextField id="outlined-basic" variant="outlined" label="rating"   value={rating}    onChange={(event) => setrating(event.target.value)} />
      <TextField id="outlined-basic" variant="outlined" label="summary"   value={summary}  onChange={(event) => setsummary(event.target.value)} />
      {/* <input placeholder="poster" onChange={(event) => setposter(event.target.value)} />
            <input placeholder="name" onChange={(event) => setname(event.target.value)} />
            <input placeholder="rating" onChange={(event) => setrating(event.target.value)} />
            <input placeholder="summary" onChange={(event) => setsummary(event.target.value)} /> */}

      <Button variant="contained" onClick={editmovie} color="error"> Save </Button>


    </div>
  );

}