import "../styles/NavBar.css";
import SignIn from "./Modals/SignIn";
import SignUp from "./Modals/SignUp";
import Profile from "./Modals/Profile";
import { useCookies } from "react-cookie";

function NavBar(props) {
  const [, setCookie] = useCookies(["token"]);
  function handleSignOut() {
    let tokenValue = "";
    setCookie("token", tokenValue, { path: "/" });
  }

  function LoggedOut() {
    return (
      <div className="button-holder">
        <SignIn></SignIn>
        <SignUp></SignUp>
      </div>
    );
  }

  function LoggedIn() {
    return (
      <div className="button-holder">
        <Profile userName={props.userName} />

        <button onClick={handleSignOut} className="MainSignInBtn">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <section className="navBar">
      <div className="navLogo">
        <h1>MYPay</h1>
      </div>
      <div className="navContainer">
        <nav>
          <ul>
            <li>Home</li>
            <li>Company</li>
            <li>Career</li>
          </ul>
        </nav>
      </div>
      {props.isLoggedIn ? <LoggedIn /> : <LoggedOut />}
    </section>
  );
}

export default NavBar;
