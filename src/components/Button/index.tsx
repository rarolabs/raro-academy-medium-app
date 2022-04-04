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
      className={ className ? className : `
      w-full mt-6 tracking-widest
      border-b-blue-600 bg-blue-500 py-3 text-white font-bold
      hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400
      ` }
      onClick={onClick}
    >
      { children }
    </button>
  );
};