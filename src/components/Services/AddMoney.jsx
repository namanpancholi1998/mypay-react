import "../../styles/services.css";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddMoney() {
  const [inputValue, setInputValue] = useState("");

  let accBalance = window.localStorage.getItem("balance");
  const handleAddMoney = () => {
    if (inputValue === "" || isNaN(inputValue)) {
      toast.error("Please Enter Valid Amount!");
      return;
    }

    let updatedBalance = parseFloat(accBalance) + parseFloat(inputValue);
    window.localStorage.setItem("balance", updatedBalance);
    toast.success(`Successfully added ${inputValue} Rs`);

    toast(`Your Updated Balance is ${window.localStorage.getItem("balance")}`);
    setInputValue("");
  };

  return (
    <div className="container">
      <h2>Add Money</h2>
      <input
        type="number"
        placeholder="Amount"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className="Btn-blue" onClick={handleAddMoney}>
        Add Money
      </button>
    </div>
  );
}
