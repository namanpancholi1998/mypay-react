import "../../styles/SignInModal.css";
import React from "react";
import Modal from "react-modal";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { encryptor } from "../../util/Encryptor";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "80vh",
    width: "50vw",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
    borderRadius: "5px",
    backgroundColor: "#f1f2ff",
  },
};

function SignInModal({ users }) {
  const [, setCookie] = useCookies(["token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handelLogIn(e) {
    e.preventDefault();
    let userName;
    let loggedUsers;
    if (users) {
      loggedUsers = users.filter(
        (user) => user.email === email && user.password === password
      );
    }

    if (loggedUsers.length > 0) {
      userName = loggedUsers[0].name;
    } else {
      userName = "";
    }

    if (userName != "") {
      let token = encryptor(userName);
      let tokenValue = `mypay-${token}-mypay`;
      setCookie("token", tokenValue, { path: "/" });
    } else {
      toast.error("Please Enter Correct Email And Password");
    }
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
    subtitle.style.margin = "0";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="Btn-blue">
        Sign In
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="SignIn Modal"
      >
        <div className="crossSymbol" onClick={closeModal}>
          &#10060;
        </div>
        <div className="heading">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign In</h2>
          <p>Stay Updated On Your Payments</p>
        </div>

        <form>
          <div className="inputBox">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Please enter your email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <label htmlFor="password">Password</label>
              <a className="forget">Forget Password?</a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Please enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="checkBox">
              <input type="checkbox" />
              <span>Keep me Sign Ip</span>
            </div>
          </div>
          <div className="signInBtn">
            <button onClick={handelLogIn}>Sign In</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default SignInModal;

// https://www.npmjs.com/package/react-modal
// https://www.seedr.cc
// https://legacy.reactjs.org/docs/hooks-intro.html

// Edited Sir se Puchna hai ??
/*
const userName = users.map((user) => user.name);
    const userExists = users.some(
      (user) => user.name === email && user.password === password
    );

    if (userExists) {
      console.log("User authenticated");
    } else {
      console.log("User not found");
    }

    const isLogedIn = users.some(
      (user) => user.email === email && user.password === password
    );

    users.filter(
      (user) => user.userName === email && user.password === password
    ).length > 0;

    if (isLogedIn) {
      let tokenValue = `mypay-${userName}-mypay`;
      setCookie("token", tokenValue, { path: "/" });
    } else {
      alert("Password galt hai");
    }
 */
