import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as yup from 'yup';
export function Addmovie() {
 const navigate= useNavigate();
  // const [name, setname] = useState("");
  // const [poster, setposter] = useState("");
  // const [rating, setrating] = useState("");
  // const [summary, setsummary] = useState("");
 
const addmovie =(newmovie) => {
  
  fetch("https://62bae5f9573ca8f8328e495e.mockapi.io/movies",
  {
    method: "POST",
    body: JSON.stringify(newmovie),
    headers: {
      "Content-Type": "application/json",
    }
  })
   .then(()=> navigate("/films"));
   console.log(newmovie);
}



//  const addmovie = () => {
//   const newmovie = {
//     name: name,
//     poster: poster,
//     rating: rating,
//     summary: summary,
//   };
  // console.log(newmovie);
  // setmovielist([...movielist, newmovie]);
  //post method
 //1.method-post
 //2. we should pass new movie data in body and in json format
 //3.in headres we should mention we r passing json data 


//   fetch("https://62bae5f9573ca8f8328e495e.mockapi.io/movies",
//   {
//     method: "POST",
//     body: JSON.stringify(newmovie),
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })
//    .then(()=> navigate("/films"));
//    console.log(newmovie);
 
//  }

 const movievalidation_Schema = yup.object({
  name: yup.string().required().min(5,"enter valid name"),
  poster: yup.string().required(" pleasefill this field "),
  rating: yup.number()
  .required(" pleasefill this field ")
  //since rating is number in min,max it considers the value not the length of the values
  .min(1,"Need a better rating")
  .max(10,"rating above the limit"),
  summary: yup.string().required(" pleasefill this field ").min(25,"Need a minimum summary of length 25"),
})


 const {handleSubmit,handleChange,handleBlur,values,touched,errors} = 
 useFormik({initialValues : {
    name: "",
    poster: "",
    rating: "",
    summary:"",
  },
  validationSchema: movievalidation_Schema,
  onSubmit: (newmovie) => {
    console.log("onSubmit",newmovie);
    addmovie(newmovie);
  },
});

  return (
    <form onSubmit={handleSubmit} className="add-form">
      {/* <TextField id="outlined-basic" variant="outlined" label="poster" onChange={(event) => setposter(event.target.value)} />
      <TextField id="outlined-basic" variant="outlined" label="name" onChange={(event) => setname(event.target.value)} />
      <TextField id="outlined-basic" variant="outlined" label="rating" onChange={(event) => setrating(event.target.value)} />
      <TextField id="outlined-basic" variant="outlined" label="summary" onChange={(event) => setsummary(event.target.value)} /> */}
      {/* <input placeholder="poster" onChange={(event) => setposter(event.target.value)} />
            <input placeholder="name" onChange={(event) => setname(event.target.value)} />
            <input placeholder="rating" onChange={(event) => setrating(event.target.value)} />
            <input placeholder="summary" onChange={(event) => setsummary(event.target.value)} /> */}

<TextField id="outlined-basic"
      variant="outlined" 
      label="name" 
        onBlur={handleBlur}
      onChange={handleChange}
      name="name" 
      error = {touched.name && errors.name}
      value={values.name}
      helperText= {touched.name && errors.name ? errors.name : ""}/>
      {/* to display error in red color as per material UI */}
     
       {/* { touched.name && errors.name ? errors.name : ""}  */}
      <TextField id="outlined-basic" variant="outlined" label="poster"  onBlur={handleBlur}
      value={values.poster}
      onChange={handleChange}
      name="poster"
      error = {touched.poster && errors.poster} />
      { touched.poster && errors.poster ? errors.poster : ""}
      <TextField id="outlined-basic"
       variant="outlined" label="rating"  onBlur={handleBlur}
     value={values.rating}
      onChange={handleChange}
      name="rating" 
      error = {touched.rating && errors.rating}/>
       { touched.rating && errors.rating ? errors.rating : ""}
      <TextField id="outlined-basic" variant="outlined" label="summary"  onBlur={handleBlur}
      onChange={handleChange}
      value={values.summary}
      name="summary"
      error = {touched.summary && errors.summary} />
       { touched.summary && errors.summary ? errors.summary : ""}
      <Button variant="contained" type="submit"> Add movie </Button>


    </form>
  );
}
