const Author = ({ author }) => {
  return (
    <>
      <div className="container bg-white rounded mt-2 p-2 me-0">
        <h2 className="fs-3 fw-bold fst-italic text-muted mt-3 ms-3">
          About Author
        </h2>
        <div className="row">
          <div className="col-3">
            <img
              src={author.iconImage}
              className="rounded-pill"
              width={90}
              alt="avatar"
            />
          </div>
          <div className="col">
            <div className="fs-4 fw-bold">{author.username}</div>
            <div className="text-secondary">
              <i className="fa-solid fa-location-dot me-2"></i>
              {author.location}
            </div>

            <div className="fs-5">{author.bio}</div>
            <div className="text-secondary">Joined {author.dateJoined}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
