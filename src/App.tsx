import Button from "@components/Button";
import Counter from "@components/Counter";
import { BUTTONS } from "@config/button";
import { useCounter } from "@hooks/useCounter";
import "./App.css";

function App() {
  const { count, disabledButtons, handleClick } = useCounter();

  return (
    <div className="app">
      <Counter count={count} />
      <div className="buttons">
        {BUTTONS.map(({ id, increment }) => (
          <Button
            key={id}
            value={increment}
            onClick={() => handleClick(increment, id)}
            disabled={!!disabledButtons[id]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
