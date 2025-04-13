import { FC } from "react";
import "./style.css";

type TCounter = {
  count: number;
};

const Counter: FC<TCounter> = ({ count }) => {
  return <h2 className="counter">Counter: {count}</h2>;
};

export default Counter;
