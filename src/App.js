// Importing Style For App.js.
import "./App.css";
// Importing Components which is used in this file :- NavBar, NavPara, MainContent.
import NavBar from "../src/components/NavBar";
import NavPara from "../src/components/NavPara";
import MainContet from "../src/components/MainContent";
// Importing react-cookie for checking is user logged in or not and if looged in taking user name form cookies.
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies(["token"]); // Hook
  let userName = "";
  let isLoggedIn = false;

  if (cookies.token !== undefined && cookies.token !== "") {
    userName = cookies.token.split("-")[1]; // here taking userName form Cookies
    if (cookies.token === `mypay-${userName}-mypay`) {
      // checking is cookies is in correct formate?
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
