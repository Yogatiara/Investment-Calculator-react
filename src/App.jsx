import { useState } from 'react';

import Calculator from './components/Calculator';
import Header from './components/Header';
import Result from './components/Result';

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvesment: 1500,
    expectedReturn: 5,
    duration: 10,
  });
  const durationIsValid = userInput.duration > 0;

  const handlerUserInput = (inputKey, newValue) => {
    setUserInput((existingUserInput) => {
      return {
        ...existingUserInput,
        [inputKey]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <Calculator
        onChangeProps={handlerUserInput}
        userInput={userInput}
      />
      {!durationIsValid && (
        <p className="center"> Masukkan durasi di atas 0 </p>
      )}
      {durationIsValid && <Result resultInput={userInput} />}
    </>
  );
};

export default App;
