import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";
function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const inputIsvalid = investment.duration >= 1;

  function handleInvestment(name, value) {
    console.log(typeof value);
    
    setInvestment((prevInvestment) => {
      return { 
        ...prevInvestment,
        [name] : +value
      };
    });
    
  }
  return (
    <>
      <Header />
      <UserInput  investment={investment}  onChangeInvestment={handleInvestment}/>
      {inputIsvalid && <Result input={investment}  />}
      {!inputIsvalid && <p className="center">Please enter a duration greater than zero.</p> }
    </>
  );
}

export default App;
