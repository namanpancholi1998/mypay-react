import React, { useState } from "react";
import "../styles/NavBar.css";
import { FaSignOutAlt } from "react-icons/fa";
import SignInModal from "./Modals/SignInModal";
import SignUpModal from "./Modals/SignUpModal";
import ProfileModal from "./Modals/ProfileModal";
import { useCookies } from "react-cookie";
import { updateUserBalance } from "../util/CookieUtil";

function NavBar(props) {
  const [cookies, setCookie] = useCookies(["token"]);
  const [allUsers, setAllUsers] = useCookies(["users"]);

  // const user = [
  //   { name: "naman", email: "naman", password: "12345", balance: 450 },
  //   { name: "admin", email: "admin", password: "admin", balance: 5600 },
  // ];
  // setAllUsers("users", user);
  // console.log(allUsers.users);
  // console.log(cookies);

  const handleSignUp = (users) => {
    console.log(users);
    setAllUsers(users);
  };

  function handleSignOut() {
    let tokenValue = "";
    let updatedBalance = window.localStorage.getItem("balance");
    setCookie("token", tokenValue, { path: "/" });
    if (allUsers.users.length > 2) {
      allUsers.users.pop();
      const user = allUsers.users;
      setAllUsers("users", user);
    }
    setCookie(
      "users",
      JSON.stringify(updateUserBalance(cookies, props.userName, updatedBalance))
    );
    window.localStorage.removeItem("balance");
  }

  function LoggedOut() {
    return (
      <div className="button-holder">
        <SignInModal users={allUsers.users} />
        <SignUpModal onSignUp={handleSignUp} />
      </div>
    );
  }

  function LoggedIn() {
    return (
      <div className="button-holder">
        <ProfileModal userName={props.userName} />
        <button onClick={handleSignOut} className="Btn-blue-userSignOut">
          <FaSignOutAlt
            style={{
              color: "#ffffff",
              fontSize: "1.5em",
              fontStyle: "italic",
            }}
          />
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
