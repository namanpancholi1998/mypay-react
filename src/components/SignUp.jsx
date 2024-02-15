import "../styles/SignUp.css";
import { findByLabelText } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

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
    backgroundColor: "#f1f2ff",
  },
};

function SignUp() {
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
      <button onClick={openModal} className="MainSignUpBtn">
        Sign Up
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="SignUp Modal"
        ariaHideApp={false}
      >
        <div className="crossSymbol" onClick={closeModal}>
          &#10060;
        </div>
        <div className="heading">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign Up</h2>
          <p>Create An Account To Stay Updated On Your Payments</p>
        </div>

        <form>
          <div className="inputBox">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Please enter your full name" />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Please enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Please enter your password" />
          </div>
          <div className="signInBtn">
            <button>Sign Up</button>
          </div>
        </form>
        {/* <div className="signUpBtn">
          <span>Don't have an account?</span>
          <button>Sign Up</button>
        </div> */}
      </Modal>
    </div>
  );
}

export default SignUp;

// https://www.npmjs.com/package/react-modal
// https://www.seedr.cc
// https://legacy.reactjs.org/docs/hooks-intro.html
