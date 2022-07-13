import { useEffect, useState } from "react";
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
// hooks -- makes react to listen to the changes 
export function Counter() {
  // let like = 10;
  const [like, setlike] = useState(0);
  const [Dislike, setDislike] = useState(0);
  const click = () => setlike(like + 1) ;
  useEffect(()=> {
    console.log("like updated");
  });
  return (
    <div>
      {/* <button onClick={()=> {
              like++;
              console.log(like);}}>like {like}</button> */}
             
              <IconButton aria-label="info" color='primary'  onClick={click} >
              <Badge badgeContent={like} color="primary" fontSize="large" >
              <ThumbUpIcon color="warning"  fontSize="medium" />
              </Badge>
              </IconButton>
              <IconButton aria-label="info" color='error'  onClick={() => setDislike(Dislike + 1)} >
          <Badge badgeContent={Dislike} color="error">
          <ThumbDownAltIcon color="warning" />
          </Badge>
          </IconButton>
      {/* <button onClick={() => setlike(like + 1)} className="like">👍 {like}</button>
      <button onClick={() => setDislike(Dislike + 1)} className="dislike">👎 {Dislike}</button> */}
    </div>
  );

}
