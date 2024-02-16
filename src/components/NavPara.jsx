import "../styles/NavPara.css";

function NavPara(props) {
  let isLoggedIn = props.isLoggedIn;

  const LoggedInPara = () => {
    return (
      <p>
        <span style={{ fontWeight: "bold" }}>
          Welcome To MYPay {props.userName.toUpperCase()}
        </span>
        😊.
        <span style={{ fontWeight: "bold" }}>User Our Services</span>
      </p>
    );
  };

  const LoggedOutPara = () => {
    return (
      <p>
        <span style={{ fontWeight: "bold" }}>No Wallet KYC Required</span>
        😊 to pay using UPI on MYPay.
        <span style={{ fontWeight: "bold" }}> Learn more.</span>
      </p>
    );
  };

  return (
    <div className="navPara">
      {isLoggedIn ? <LoggedInPara /> : <LoggedOutPara />}
    </div>
  );
}

export default NavPara;
