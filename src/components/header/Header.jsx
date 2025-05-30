import Container from "../container/Container.jsx";
import Logo from "../logo/Logo.jsx";
import LogoImage from "../../assets/images/logo.png";
import "./header.css";
import LinkButton from "../link-button/LinkButton.jsx";

const menuItems = [
  {
    label: "Cafe Menu",
    url: "#",
  },
  {
    label: "About Us",
    url: "#",
  },
  {
    label: "Find Us",
    url: "#",
  },
  {
    label: "Alowishus",
    url: "#",
  },
  {
    label: "Catering",
    url: "#",
  },
];

function Header() {
  return (
    <header className="header">
      <Container>
        <nav className="header-nav">
          <Logo imageUrl={LogoImage} alt="Allowishus" />

          <div className="header-right">
            <ul className="header-menu">
              {menuItems.map((item, index) => (
                <li key={index} className="header-menu-item">
                  <a className="header-menu-link" href={item.url}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a className="header-cart" href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.13201 0.503906L2.42001 6.99991H1.00001C0.688008 6.99991 0.395007 7.14591 0.205007 7.39291C0.0160075 7.64091 -0.0469923 7.96291 0.0350077 8.26291L2.83401 18.5259C3.07001 19.3939 3.86401 19.9999 4.76401 19.9999H15.237C16.135 19.9999 16.929 19.3949 17.167 18.5249L19.966 8.26191C20.048 7.96191 19.986 7.63991 19.796 7.39191C19.605 7.14591 19.312 6.99991 19 6.99991H17.58L13.868 0.503906L12.132 1.49591L15.277 6.99991H4.72301L7.86801 1.49591L6.13201 0.503906ZM12 10.9999H14V15.9999H12V10.9999ZM6.00001 10.9999H8.00001V15.9999H6.00001V10.9999Z"
                  fill="#1B1B1D"
                />
              </svg>
            </a>

            <LinkButton href="#">Buy gift vouchers</LinkButton>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
