import React from "react";

export type ButtonProps = {
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  className?: string,
  onClick?: () => void,
  color: string
};

interface IColorOptions {
  [gray:string]: string,
  red: string, 
  blue: string,
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  type,
  className,
  onClick,
  children,
  color
}) => {
  const colorOptions:IColorOptions = {
    gray: `
    w-full mt-6 tracking-widest
    border-b-gray-600 bg-gray-500 py-3 text-white font-bold
    hover:bg-gray-400 active:translate-y-[0.125rem] active:border-b-gray-400
    `,
    red: `
    w-full mt-6 tracking-widest
    border-b-red-600 bg-red-500 py-3 text-white font-bold
    hover:bg-red-400 active:translate-y-[0.125rem] active:border-b-red-400
    `, 
    blue:  `
    w-full mt-6 tracking-widest
    border-b-blue-600 bg-blue-500 py-3 text-white font-bold
    hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400
    `
  }

  return (
    <button
      type={ type }
      className = { colorOptions[color] }
      onClick={onClick}
    >
      { children }
    </button>
  );

};