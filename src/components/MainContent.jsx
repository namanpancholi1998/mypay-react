import React, { useState } from "react";
import "../styles/MainContent.css";
import Logo from "../images/logo.svg";
import BannerImage from "../images/1697527211984.avif";
import AddMoney from "./Services/AddMoney";
import SendMoney from "./Services/SendMoney";
import MobileRecharge from "./Services/Recharge";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainContent(props) {
  const [selectedService, setSelectedService] = useState("");
  function displayService() {
    if (selectedService === "AddMoney") {
      return <AddMoney />;
    } else if (selectedService === "SendMoney") {
      return <SendMoney />;
    } else if (selectedService === "Recharge") {
      return <MobileRecharge />;
    } else {
      return <h2>Please Select Any service.</h2>;
    }
  }
  function LoggedInContent() {
    return (
      <div className="userContainer">
        <ToastContainer position="bottom-right" />
        <div className="userGreetings">
          <h1>Hello {props.userName.toUpperCase()}</h1>
          <p>Welcome To MYPay Here You Can Use Our Services</p>
        </div>
        <div className="service">
          <h3>Services</h3>
        </div>
        <div className="wrapper">
          <div className="serviceButtonsContainer">
            <div
              className="serviceButtons"
              onClick={() => setSelectedService("AddMoney")}
            >
              Add Money
            </div>
            <div
              className="serviceButtons"
              onClick={() => setSelectedService("SendMoney")}
            >
              Send Money
            </div>
            <div
              className="serviceButtons"
              onClick={() => setSelectedService("Recharge")}
            >
              Recharge
            </div>
          </div>
          <div className="serviceDisplay">{displayService()}</div>
        </div>
      </div>
    );
  }

  function LoggedOutContent() {
    return (
      <div className="main_content">
        <div className="content">
          <div className="logo">
            {/* <!-- Add logo here of myPay --> */}
            <img src={Logo} alt="MYPay-logo" />
          </div>
          <h1>India's Most-loved Payments App</h1>
          <div className="recharge">
            Add Money &amp; Recharge, <br />
            Check Account Balance, <br />
            and do a lot more.
          </div>
        </div>
        <img src={BannerImage} alt="BannerImage" className="banner" />
      </div>
    );
  }

  return (
    <section className="main_section">
      {props.isLoggedIn ? <LoggedInContent /> : <LoggedOutContent />}
    </section>
  );
}

export default MainContent;
