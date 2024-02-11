import "../styles/MainContent.css";
import Logo from "../images/logo.svg";
import BannerImage from "../images/1697527211984.avif";

function MainContet() {
  return (
    <section className="main_section">
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
    </section>
  );
}

export default MainContet;
