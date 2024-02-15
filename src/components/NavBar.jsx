import "../styles/NavBar.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import { useCookies } from "react-cookie";

function NavBar(props) {
  const [cookies, setCookie] = useCookies(["token"]);
  function handleSignOut() {
    let tokenValue = "";
    setCookie("token", tokenValue, { path: "/" });
  }

  const loggedOut = (
    <div className="button-holder">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );

  const loggedIn = (
    <div className="button-holder">
      <Profile userName={props.userName} />

      <button onClick={handleSignOut} className="MainSignInBtn">
        Sign Out
      </button>
    </div>
  );

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
      {props.isLoggedIn ? loggedIn : loggedOut}
    </section>
  );
}

export default NavBar;
