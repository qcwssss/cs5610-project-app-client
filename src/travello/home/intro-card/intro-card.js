import "./card.css";

let cardStyle = {
  height: "15rem",
  width: "12rem",
  border: "none",
};
const IntroCard = () => {
  return (
    <div className="container-fluid custom-card">
      <div className="card intro ps-2 " style={cardStyle}>
        <i className="fa-solid fa-people-group"></i>
        <h5>Great Commnutiy</h5>
        <p>Find travel lovers just like you </p>
      </div>
      <div className="card intro ps-3 " style={cardStyle}>
        <i className="fa-solid fa-map-location-dot"></i>
        <h5>Best Places</h5>
        <p>Find the best places to fit for you </p>
      </div>
      <div className="card intro" style={cardStyle}>
        <i className="fa-solid fa-feather"></i>
        <h5>Share Your Thoughs</h5>
        <p>Write and share your ideas</p>
      </div>
      <div className="intro card pe-2" style={cardStyle}>
        <i className="fa-solid fa-radio"></i>
        <h5>Latest News</h5>
        <p>Get the latest news and information</p>
      </div>
    </div>
  );
};

export default IntroCard;
