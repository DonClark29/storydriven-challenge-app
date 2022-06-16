import "./index.scss";
export default function HeaderHero({ title, image }) {
  return (
    <header
      className="header-hero d-flex align-items-center"
      style={{ backgroundImage: "url(" + image.url + ")" }}
    >
      <div
        className="container-fluid"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="row text-center">
          <h1 className="text-white fw-light">{title}</h1>
        </div>
      </div>
    </header>
  );
}
