// import "./column.css";

function CardColumnItem({
  post = {
    title: "Great Fireworks At The Big Apple",
    topic: ["newyork", "bigapple"],
    userName: "John Doe",
    userId: "2243",
    date: "02/17/2022",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "fireworks.png",
    likes: 12,
  },
}) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://images.unsplash.com/photo-1472076638602-b1f8b1ac0b4a?ixlib=rb-0.3.5&s=63c9de7246b535be56c8eaff9b87dd89&auto=format&fit=crop&w=500&q=80"
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          iusto maxime nemo omnis praesentium similique.
        </p>
        <p className="card-text">
          <small className="text-muted">
            <i className="fas fa-eye"></i>
            {post.likes}
            <i className="far fa-user"></i>
            {post.userName}
            <i className="fas fa-calendar-alt"></i>
            {post.date}
          </small>
        </p>
      </div>
    </div>
  );
}
export default CardColumnItem;
