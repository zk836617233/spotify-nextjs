import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  icon?: IconType;
  outline?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon,
  outline,
  onClick,
}) => {
  return (
    <button
      className={`border-[1px] flex justify-center items-center py-3 px-8 rounded-[500px] text-sm font-bold tracking-widest hover:opacity-80 ${outline ? 'border-[#878787]' : 'border-transparent bg-primary'}`}
      onClick={onClick}
    >
      {Icon && <Icon size={24} className="mr-2" />}
      {label}
    </button>
  );
};

export default Button;
