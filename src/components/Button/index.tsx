import React from "react";

export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean
};

export const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  children,
}) => {
  return (
    <button
      type={ type }
      className={`
        w-full mt-6 tracking-widest
        border-b-green-450 bg-green-500 py-3 text-white
        hover:bg-green-600 active:translate-y-[0.125rem] active:border-b-green-400
      `}
      disabled={ disabled }
    >
      { children }
    </button>
  );
};