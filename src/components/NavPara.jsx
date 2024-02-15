import "../styles/NavPara.css";

function NavPara(props) {
  let isLoggedIn = props.isLoggedIn;

  const loggedInPara = (
    <p>
      <span style={{ fontWeight: "bold" }}>
        Welcome To MYPay {props.userName.toUpperCase()}
      </span>
      😊.
      <span style={{ fontWeight: "bold" }}>User Our Services</span>
    </p>
  );

  const loggedOutPara = (
    <p>
      <span style={{ fontWeight: "bold" }}>No Wallet KYC Required</span>
      😊 to pay using UPI on MYPay.
      <span style={{ fontWeight: "bold" }}> Learn more.</span>
    </p>
  );

  return (
    <div className="navPara">{isLoggedIn ? loggedInPara : loggedOutPara}</div>
  );
}

export default NavPara;
{
  /* TODO: I need to ask sir how can I use isLoggedIn here ?? */
}
{
  /* {isLoggedIn ? "true" : "false"} */
}
