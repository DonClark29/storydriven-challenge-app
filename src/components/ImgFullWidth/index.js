import "./index.scss";
export default function ImgFullWidth({ image }) {
  return (
    <div className="img-full-width">
      <img src={image.url} alt={image.alt} title={image.title} />
    </div>
  );
}
