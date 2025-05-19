import "./logo.css";
export default function Logo({ imageUrl, alt }) {
  return <img className="logo" src={imageUrl} alt={alt} />;
}
