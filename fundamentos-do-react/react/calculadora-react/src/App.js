import { Container, Content, Rom } from "./styles"
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0")
  let firstNumber = "0";
  
  const handleClear = () => setCurrentNumber("0");

  const handleAddNumber = (number) => {
    setCurrentNumber(valorPrevio => `${valorPrevio === "0" ? "" : valorPrevio}${number}`)
    console.log("currentNumber: ", Number(currentNumber))
    console.log("firstNumber: ", Number(firstNumber))
  }

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      firstNumber = currentNumber;
      
      console.log("firstNumber: ", Number(firstNumber))
    }
  }

  const igual = () => {
    
      const num = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(valorPrevio => String(num))
      //firstNumber = "0";
    
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Rom>
          <Button label="x" />
          <Button label="/" />
          <Button label="C" onClick={() => handleClear()} />
          <Button label="X" />
        </Rom>
        <Rom>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleAddNumber("")} />
        </Rom>
        <Rom>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Rom>
        <Rom>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={igual} />
        </Rom>

      </Content>
    </Container>
  );
}

export default App;
