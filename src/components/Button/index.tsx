import React from "react";

export type ButtonProps = {
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  className?: string,
  onClick?: () => void
};

export const Button: React.FC<ButtonProps> = ({
  disabled,
  type,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      type={ type }
      className={className}
      onClick={onClick}
    >
      { children }
    </button>
  );
};