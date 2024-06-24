import { useState } from "react";
import { toast } from "react-toastify";

export default function SendMoney() {
  const [receiverName, setReceiverName] = useState("");
  const [amount, setAmount] = useState("");

  let accBalance = window.localStorage.getItem("balance");

  const handleSendMoney = () => {
    if (receiverName === "") {
      toast.error("Please Enter Receiver Name");
      return;
    }

    if (amount === "" || isNaN(amount)) {
      toast.error("Please Enter Valid Amount!");
      return;
    }

    let updatedBalance = parseFloat(accBalance) - parseFloat(amount);
    window.localStorage.setItem("balance", updatedBalance);
    toast.success(`Transaction Successful to ${receiverName} of ${amount}Rs `);
    setAmount("");
    setReceiverName("");
  };

  const handleReceiverName = (e) => {
    setReceiverName(e.target.value);
  };

  return (
    <div className="container">
      <h2>Send Money</h2>
      <input
        type="text"
        placeholder="Receiver Name"
        value={receiverName}
        onChange={handleReceiverName}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button className="Btn-blue" onClick={handleSendMoney}>
        Send Money
      </button>
    </div>
  );
}
