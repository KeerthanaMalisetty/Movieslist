function Welcome(props) {
  const name = "keerthi";
  console.log(props);
  return (
    <div>
      {/* <img src={props.img} className="img" /> */}
      <h1>hi {props.name} </h1>
    </div>
  );
}
