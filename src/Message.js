import { Counter } from './Counter';

// props -- used to pass arguments to components
// function Message(props){
function Message({ name, img }) {
  // const name = "keerthi"; 
  // console.log(props);
  return (
    <div>
      {/* <img src={props.img} className="img" /> */}
      <img src={img} className="img" />
      {/* <h1>hi {props.name} </h1> */}
      <h1>hi {name} </h1>
      <Counter />
    </div>
  );
}
