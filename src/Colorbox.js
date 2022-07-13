
import  { useState } from "react";

export function Colorbox({ color }) {
  const styling = {
    background: color,
    width: "180px",
    height: "40px",
    marginTop: "10px"
  };
  return (
    <div style={styling}>

    </div>
  );
}

export function Addcolor(){
  const [color , setcolor] = useState("skyblue");
  const style = {
    background : color || 'skyblue',
  };
  const Icolorlist = ["green" , "red" , "plum"];
  const colour = "red";
  const [colorlist,setcolorlist] = useState(Icolorlist);
  return(
    <div>
      <input 
      value={color}
      placeholder='enter color'
       style={style} 
       onKeyUp={(event)=> setcolor(event.target.value)} />
      <button onClick={()=> setcolorlist([...colorlist,color])}>Add color</button>
      {colorlist.map((clr,index)=> (<Colorbox key={index} color={clr}/> ))}
    </div>
  );
}