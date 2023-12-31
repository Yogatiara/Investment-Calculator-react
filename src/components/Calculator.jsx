import './Calculator.css';

const Calculator = ({ onChangeProps, userInput }) => {
  return (
    <form action="" id="user-input">
      <div className="input-group">
        <p>
          <label>Inisial Investasi</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) =>
              onChangeProps('initialInvestment', e.target.value)
            }
          />
        </p>
        <p>
          <label>Inisial Tahunan</label>
          <input
            type="number"
            value={userInput.annualInvesment}
            onChange={(e) =>
              onChangeProps('annualInvesment', e.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Perkiraan balik modal</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) =>
              onChangeProps('expectedReturn', e.target.value)
            }
          />
        </p>
        <p>
          <label>Durasi</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) =>
              onChangeProps('duration', e.target.value)
            }
          />
        </p>
      </div>
    </form>
  );
};

export default Calculator;
