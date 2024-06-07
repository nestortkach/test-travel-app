import React from "react";

interface IProps {
  label: string;
  startIcon?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ label, onClick, startIcon }: IProps) => {
  return (
    <button
      onClick={onClick}
      className="border p-2 rounded-xl font-semibold text-sm flex items-center"
    >
      {startIcon}
      {label}
    </button>
  );
};

export default Button;
