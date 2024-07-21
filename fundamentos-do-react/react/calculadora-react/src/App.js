import { Container, Content, Rom } from "./styles"
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0")
  const [firstNumber, setFirstNumber] = useState("0")
  const [operation, setOperation] = useState("")

  const handleClear = () => {
    setCurrentNumber("0")
    setFirstNumber("0")
    setOperation("")
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(valorPrevio => `${valorPrevio === "0" ? "" : valorPrevio}${number}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0")
      setOperation("+");
    } else {
      const num = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(num))
    }
  }
  const handleMultiplicationNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0")
      setOperation("x");
    } else {
      const num = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(num))
    }
  }
  const handleDivisionNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0")
      setOperation("/");
    } else {
      const num = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(num))
    }
  }
  const handleRemNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0")
      setOperation("-");
    } else {
      const num = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(num))
    }
  }

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers()
          break;
        case "-":
          handleRemNumbers()
          break;
        case "x":
          handleMultiplicationNumbers()
          break;
        case "/":
          handleDivisionNumbers()
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Rom>
          <Button label="x" onClick={handleMultiplicationNumbers}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
          <Button label="." />
          <Button label="c" onClick={() => handleClear()} />
          
        </Rom>
        <Rom>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleRemNumbers} />
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
          <Button label="=" onClick={handleEquals} />
        </Rom>

      </Content>
    </Container>
  )
}

export default App;
