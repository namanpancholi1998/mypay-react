import "../../styles/SignUpModal.css";
import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import { Cookies, useCookies } from "react-cookie";

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

function SignUpModal({ onSignUp }) {
  const [newUser, setNewUser] = useCookies();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [users, setUsers] = useState([]);
  // console.log(newUser.users);

  function handelSignUp() {
    const existingUsers = newUser.users || []; // Initialize if undefined
    const newUserObj = { name, email, password, balance: 1000 };

    setNewUser("users", [...existingUsers, newUserObj]);
    // console.log(newUser);
    // onSignUp([...existingUsers, newUserObj]);

    // const newUser = { name, email, password, balance: 1000 };
    // newUser.users.push(setNewUser("users", newUser));
    // setUsers([...users, newUser]);
    // onSignUp([...newUser.users, newUser]);
  }

  let subtitle;
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
            <input
              type="text"
              placeholder="Please enter your full name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Please enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Please enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signInBtn">
            <button onClick={handelSignUp}>Sign Up</button>
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

export default SignUpModal;

// https://www.npmjs.com/package/react-modal
// https://www.seedr.cc
// https://legacy.reactjs.org/docs/hooks-intro.html
// Edited sir se puchna hai ??
/*
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  function handelSignUp() {
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    onSignUp([...users, newUser]);
  }

*/
