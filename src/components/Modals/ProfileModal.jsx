import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../../styles/ProfileModal.css";
import { FaRegUser } from "react-icons/fa";
import { getProfile } from "../../util/CookieUtil.js";
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
    borderRadius: "5px",
    backgroundColor: "#f1f2ff",
  },
};

function ProfileModal({ userName }) {
  const [cookies, setCookie] = useCookies(["token"]);
  const [localBalance, setLocalBalance] = useState("");
  let subtitle;
  let profile = getProfile(cookies);
  console.log(profile);

  useEffect(() => {
    const storedBalance = localStorage.getItem("balance");
    if (storedBalance) {
      setLocalBalance(storedBalance);
    } else {
      setLocalBalance(profile.balance);
      localStorage.setItem("balance", profile.balance);
    }
  }, []);

  let date = new Date();
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
      {}
      <button onClick={openModal} className="Btn-blue-userProfile">
        <FaRegUser style={{ color: "#ffffff", fontSize: "1.5em" }} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Profile Modal"
      >
        <div className="crossSymbol" onClick={closeModal}>
          &#10060;
        </div>
        <div className="profileModal">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Profile</h2>
          <p>
            Hello <span className="userName">{userName}</span>
          </p>
          <h3>
            Account Balance:{" "}
            <span>{window.localStorage.getItem("balance")}</span>
          </h3>
          <p>{date.toLocaleDateString()}</p>
        </div>
      </Modal>
    </div>
  );
}

export default ProfileModal;

// https://www.npmjs.com/package/react-modal
// https://www.seedr.cc
// https://legacy.reactjs.org/docs/hooks-intro.html
