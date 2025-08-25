export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment-amount">Initial Investment</label>
          <input type="number" id="investment-amount" required />
        </p>

        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" required />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" required />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" required />
        </p>
      </div>
    </section>
  );
}
