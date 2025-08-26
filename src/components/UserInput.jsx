export default function UserInput(props) {
  const { onChange, userInput } = props;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment-amount">Initial Investment</label>
          <input
            type="number"
            id="investment-amount"
            required
            value={userInput.initialInvestment}
            onChange={(event) => {
              onChange("initialInvestment", event.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            required
            value={userInput.annualInvestment}
            onChange={(event) => {
              onChange("annualInvestment", event.target.value);
            }}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            id="expected-return"
            required
            value={userInput.expectedReturn}
            onChange={(event) => {
              onChange("expectedReturn", event.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            required
            value={userInput.duration}
            onChange={(event) => {
              onChange("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
