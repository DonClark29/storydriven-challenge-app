import "./index.scss";
export default function TextFullWidth({
  title,
  subtitle,
  text,
  backgroundClass = "dark-bg",
}) {
  return (
    <div className={`text-full-width ${backgroundClass}`}>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            {title && (
              <h2 className="title" data-aos="fade-up" data-aos-duration="850">
                {title}
              </h2>
            )}
            {subtitle && (
              <h3
                className="subtitle"
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="200"
              >
                {subtitle}
              </h3>
            )}

            {text && (
              <p
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="300"
              >
                {text}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
