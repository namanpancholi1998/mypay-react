import "../styles/MainContent.css";
import Logo from "../images/logo.svg";
import BannerImage from "../images/1697527211984.avif";
import AddMoney from "../components/AddMoney";
import SendMoney from "./SendMoney";
import MobileRecharge from "./Recharge";

function MainContet(props) {
  const loggedInContent = (
    <div className="userContainer">
      <div className="userGreatings">
        <h1>Hello {props.userName.toUpperCase()}</h1>
        <p>Welcome To MYPay Here You Can Use Our Services</p>
      </div>
      <div className="service">
        <h3>Services</h3>
      </div>
      <div className="wraper">
        <div className="serviceButtonsContainer">
          <AddMoney></AddMoney>
          <SendMoney></SendMoney>
          <MobileRecharge></MobileRecharge>
        </div>
        <div></div>
      </div>
    </div>
  );

  const loggedOutContent = (
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

  return (
    <section className="main_section">
      {props.isLoggedIn ? loggedInContent : loggedOutContent}
    </section>
  );
}

export default MainContet;
