import "../styles/Header.css";
import NavBar from "./NavBar";
import NavPara from "./NavPara";
import MainContet from "./MainContent";

function Header() {
  return (
    <div>
      <header className="header">
        <NavBar></NavBar>
        <NavPara></NavPara>
        <MainContet></MainContet>
      </header>
    </div>
  );
}

export default Header;
