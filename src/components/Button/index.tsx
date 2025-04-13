import { FC, ButtonHTMLAttributes } from "react";

// Extend native <button> props
type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<TButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Button;
