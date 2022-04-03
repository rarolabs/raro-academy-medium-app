import React from "react";

export type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined
  disabled?: boolean
  buttonAction?: 'back' | 'delete'
  action?: () => void
};

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  buttonAction,
  action
}) => {

  const handleAction = () => {
    if (action) {
      action()
    }
  }

  if (type === 'submit') {
    return (
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <button
          disabled={disabled}
          type={type}
          onClick={handleAction}
          className={`
        w-full mt-6 tracking-widest py-3 text-white font-bold active:translate-y-[0.125rem] 
        border-b-blue-600 bg-blue-500 hover:bg-blue-400 active:border-b-blue-400
        `}>
          {children}
        </button>
      </div>
    );
  }

  if (buttonAction === 'back') {
    return (
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <button
          disabled={disabled}
          type={type}
          onClick={handleAction}
          className={`
            w-full mt-6 tracking-widest py-3 text-white font-bold active:translate-y-[0.125rem] 
            border-b-gray-600 bg-gray-500 hover:bg-gray-400 active:border-b-gray-400
        `}>
          {children}
        </button>
      </div>
    );
  }

  if (buttonAction === 'delete') {
    return (
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <button
          disabled={disabled}
          type={type}
          onClick={handleAction}
          className={`
            w-full mt-6 tracking-widest py-3 text-white font-bold active:translate-y-[0.125rem] 
            border-b-red-600 bg-red-500 hover:bg-red-400 active:border-b-red-400
        `}>
          {children}
        </button>
      </div>
    );
  }

  return <></>

};
