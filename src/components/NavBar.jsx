import "../styles/NavBar.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import { CookiesProvider, useCookies } from "react-cookie";

function NavBar() {
  const [cookies, setCookie] = useCookies(["token"]);
  let isLoggedIn = false;
  let userName = "";
  
  if (cookies.token !== undefined && cookies.token !== "") {
    userName = cookies.token.split("-")[1];
    if (cookies.token === `mypay-${userName}-mypay`) {
      isLoggedIn = true;
      console.log(userName);
    }
  }

  function handleSignOut() {
    let tokenValue = '';
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
      {/* <p>Hello {userName} </p> */}
      <Profile userName={userName}/>
      <button onClick={handleSignOut}>Sign Out</button>
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
      {isLoggedIn ? loggedIn : loggedOut}
    </section>
  );
}

export default NavBar;
