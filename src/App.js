import "./App.css";
import NavBar from "../src/components/NavBar";
import NavPara from "../src/components/NavPara";
import MainContent from "../src/components/MainContent";
// Importing react-cookie for taking user name form cookies.
import { useCookies } from "react-cookie";
// Importing checkToken for checking is user logged in or not
import { checkToken } from "../src/util/CookieUtil";
import { decryptor } from "./util/Encryptor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cookies] = useCookies(["token"]); // Hook
  let userName;
  let isLoggedIn = checkToken(cookies);

  if (isLoggedIn) {
    const token = cookies.token;
    userName = decryptor(token.split("-")[1]);
  }

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <NavBar userName={userName} isLoggedIn={isLoggedIn}></NavBar>
      <NavPara userName={userName} isLoggedIn={isLoggedIn}></NavPara>
      <MainContent userName={userName} isLoggedIn={isLoggedIn}></MainContent>
    </div>
  );
}

export default App;
