import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function MobileRecharge() {
  const [amount, setAmount] = useState("");
  const [option, setOption] = useState("select your operator");

  const handleRecharge = () => {
    if (option === "select your operator") {
      toast.error("Please Select Operator!");
      return;
    }

    if (amount === "" || isNaN(amount)) {
      toast.error("Please Enter Valid Amount!");
      return;
    }

    let updatedBalance =
      parseFloat(window.localStorage.getItem("balance")) - parseFloat(amount);
    window.localStorage.setItem("balance", updatedBalance);
    toast.success(`Successfully Recharged of ${amount}Rs`);
    setAmount("");
    setOption("select your operator");
  };

  const handleSelectChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className="container">
      <h2>Recharge</h2>
      <select value={option} onChange={handleSelectChange}>
        <option value="select your operator">Select Your Operator</option>
        <option value="airtel">Airtel Prepaid</option>
        <option value="bsnl">BSNL Prepaid</option>
        <option value="jio">Jio Prepaid</option>
        <option value="vi">Vi Prepaid</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="Btn-blue" onClick={handleRecharge}>
        Recharge
      </button>
    </div>
  );
}
