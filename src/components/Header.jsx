import "../styles/Header.css";
import NavBar from "./NavBar";
import NavPara from "./NavPara";
import MainContet from "./MainContent";
import { useCookies } from "react-cookie";

function Header() {
  const [cookies] = useCookies(["token"]);
  let userName = "";
  let isLoggedIn = false;

  if (cookies.token !== undefined && cookies.token !== "") {
    userName = cookies.token.split("-")[1];
    if (cookies.token === `mypay-${userName}-mypay`) {
      isLoggedIn = true;
    }
  }

  return (
    <div>
      <header className="header">
        <NavBar userName={userName} isLoggedIn={isLoggedIn}></NavBar>
        <NavPara userName={userName} isLoggedIn={isLoggedIn}></NavPara>
        <MainContet userName={userName} isLoggedIn={isLoggedIn}></MainContet>
      </header>
    </div>
  );
}

export default Header;

// clan Up
// get a overview
// Implement BootStrap
// Services by Newton School form Playground
