import logo from './logo.svg';
import './App.css';
// import { useState } from "react";
// import { Movie } from './Movie';
function App() {
  const names = [
    {name:"keerthi",
    img:"https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw" 
    },
    {name:"shwe",
    img:"https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw" 
    },
    {name:"neh",
    img:"https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw" 
    },
 ];
return(
<div className='App'>
  {/* <h1>hello {name}</h1> */}
  {/* <Message 
  name="keerthi" 
  img="https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw"/>
  <Message 
  name="kavitha"
   img="https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw" />
  <Message
   name="neha"
   img="https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw" /> */}
{names.map(student => <Welcome name={student.name}  img={student.img}/>)
 }
</div>  
);
}
export default App;
function Welcome({name , img}){
  // const name = "vijaya";
  return(
    <div>
    <img src={img} className="img" />
  <h1>hi {name} 🤩 </h1>

  </div>
  );
}


function Message(props){
  // const name = "vijaya";
  return(
    <div>
    <img src={props.img} className="img" />
  <h1>hi {props.name} 🤩 </h1>
  </div>
  );
}