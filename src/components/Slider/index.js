import "./index.scss";
export default function Slider({ id, images }) {
  return (
    <div
      id={id}
      className="carousel slide slider"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-indicators">
        {images.map((image, index) => {
          return (
            <button
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              className={index !== 0 ? null : "active"}
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => {
          return (
            <div
              className={index !== 0 ? "carousel-item" : "carousel-item active"}
            >
              <img src={image.url} className="d-block w-100" alt={image.alt} />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
