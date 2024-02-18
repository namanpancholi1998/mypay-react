import "../styles/services.css";

export default function AddMoney() {
  let inputValue = 0;

  const handleAddMoney = () => {
    console.log(inputValue);
  };

  return (
    <div className="container">
      <h2>Add Money</h2>
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => {
          inputValue = e.target.value;
        }}
      />
      <button className="Btn-blue" onClick={handleAddMoney}>
        Add Money
      </button>
    </div>
  );
}
