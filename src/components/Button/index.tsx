import { FC, ButtonHTMLAttributes } from "react";
import "./style.css";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: number;
  disabled: boolean;
};

const Button: FC<TButtonProps> = ({ value, disabled, onClick, ...props }) => {
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      +{value}
    </button>
  );
};

export default Button;
