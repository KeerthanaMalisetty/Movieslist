import { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from './Movie';

export function Movielist() {
  const navigate = useNavigate();
  const [movielist,setmovielist] = useState([]);

  const getmovies = () => {
    fetch("https://62bae5f9573ca8f8328e495e.mockapi.io/movies")
     .then((data) => data.json())
     .then((mvs) => setmovielist(mvs));
  }
  useEffect(()=> getmovies(),[]);
    const deletemovie = (id) => {
      // after delete we refresh the data
      fetch(
              `https://62bae5f9573ca8f8328e495e.mockapi.io/movies/${id}`,
             {
              method: "DELETE" 
             }
            ) .then(() => getmovies());
     } ;
  


  return (
    <div>
      <div className="container">
        {movielist.map((nm, index) => (
        <Movie 
        key={nm.id} 
        movie={nm} 
        id={nm.id} 
        deletebutton={<button onClick={() => deletemovie(nm.id)}
        > Delete</button>} 
        editbutton={<button onClick={() => navigate(`/films/edit/${nm.id}`)}>edit</button>} 
        /> 
        ))}
      </div>
    </div>

  );
 }
