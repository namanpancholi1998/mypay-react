import React, { useState } from "react";
import "../styles/NavBar.css";
import SignInModal from "./Modals/SignInModal";
import SignUpModal from "./Modals/SignUpModal";
import ProfileModal from "./Modals/ProfileModal";
import { useCookies } from "react-cookie";

function NavBar(props) {
  const [, setCookie] = useCookies(["token"]);
  const [allUsers, setAllUsers] = useState([]);

  const handleSignUp = (users) => {
    console.log(users);
    setAllUsers(users);
  };

  function handleSignOut() {
    let tokenValue = "";
    setCookie("token", tokenValue, { path: "/" });
  }

  function LoggedOut() {
    return (
      <div className="button-holder">
        <SignInModal users={allUsers} />
        <SignUpModal onSignUp={handleSignUp} />
      </div>
    );
  }

  function LoggedIn() {
    return (
      <div className="button-holder">
        <ProfileModal userName={props.userName} />

        <button onClick={handleSignOut} className="Btn-blue">
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
