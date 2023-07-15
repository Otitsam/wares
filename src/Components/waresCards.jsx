


function WaresCards(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} alt={props.title} className="softwareCards" />
      <div className="waresText">
        <h1 className="waresTitle">{props.title}</h1>
        <p className="waresText1">{props.text1}</p>
        <p className="waresText2">{props.text2}</p>
      </div>
    </div>
  );
}

export default WaresCards;
