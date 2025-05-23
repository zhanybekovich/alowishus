import "./button.css";

export default function LinkButton({ children, href }) {
  return (
    <a className="link-button" href={href}>
      {children}
    </a>
  );
}
