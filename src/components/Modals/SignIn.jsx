import "../../styles/SignIn.css";
import React from "react";
import Modal from "react-modal";
import { useCookies } from "react-cookie";
// import { useState } from "react";

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

const users = [
  {
    userName: "naman",
    password: "12345",
  },
  {
    userName: "admin",
    password: "admin",
  },
];

function SignIn() {
  const [cookies, setCookie] = useCookies(["token"]);
  // const [email, setEmail] = useState();

  // function handelEmail (e) {
  //   setEmail(e.target.value);
  // }

  function handelLogIn(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const isLogedIn =
      users.filter(
        (user) => user.userName === email && user.password === password
      ).length > 0;

    if (isLogedIn) {
      let tokenValue = `mypay-${email}-mypay`;
      setCookie("token", tokenValue, { path: "/" });
    } else {
      alert("Password galt hai");
    }
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
    subtitle.style.margin = "0";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="MainSignInBtn">
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
              // onChange={handelEmail}
            />
            <div>
              <label htmlFor="password">Password</label>
              <a className="forget">Forget Password?</a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Please enter your password"
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

export default SignIn;

// https://www.npmjs.com/package/react-modal
// https://www.seedr.cc
// https://legacy.reactjs.org/docs/hooks-intro.html
