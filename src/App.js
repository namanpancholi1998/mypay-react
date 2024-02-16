import "./App.css";
// import Header from "./components/Header";
// import "../src/styles/header.css;
import NavBar from "../src/components/NavBar";
import NavPara from "../src/components/NavPara";
import MainContet from "../src/components/MainContent";
import { useCookies } from "react-cookie";

function App() {
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
      <NavBar userName={userName} isLoggedIn={isLoggedIn}></NavBar>
      <NavPara userName={userName} isLoggedIn={isLoggedIn}></NavPara>
      <MainContet userName={userName} isLoggedIn={isLoggedIn}></MainContet>
    </div>
  );
}

export default App;
