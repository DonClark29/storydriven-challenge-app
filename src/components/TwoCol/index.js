import "./index.scss";
export default function TwoCol({
  icon,
  title,
  text,
  image,
  textLeft = false,
  backgroundClass = "dark-bg",
}) {
  return (
    <div className={`container-fluid two-col ${backgroundClass}`}>
      <div className={textLeft ? "row flex-row-reverse" : "row"}>
        <div className="col-md-6">
          <img src={image.url} alt={image.alt} />
        </div>
        <div className="col-md-6 text-col text-center">
          <div className="text-wrapper">
            <img
              src={icon.url}
              data-aos="fade-up"
              data-aos-duration="850"
              alt={icon.alt}
            />
            <h4
              className="title"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="200"
            >
              {title}
            </h4>
            <p data-aos="fade-up" data-aos-duration="850" data-aos-delay="300">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
