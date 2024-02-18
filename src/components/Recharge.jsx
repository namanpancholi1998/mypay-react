export default function MobileRecharge() {
  return (
    <div className="container">
      <h2>Recharge</h2>
      <select>
        <option>Select Your Operator</option>
        <option>Airtel Prepaid</option>
        <option>BSNL Prepaid</option>
        <option>Jio Prepaid</option>
        <option>Vi Prepaid</option>
      </select>
      <input type="number" placeholder="Amount" />
      <button className="Btn-blue">Recharge</button>
    </div>
  );
}
