import React from "react";

export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
}) => {
  return (
    <button
      type={ type }
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