import React from "react";

export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
}) => {
  return (
    <button
      type={ type }
      disabled={disabled}
      className={`
        w-full mt-6 tracking-widest
        border-b-blue-600 bg-blue-500 py-3 text-white font-bold
        hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400
      `}
    >
      { children }
    </button>
  );
};