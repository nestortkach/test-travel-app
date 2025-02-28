import React, { ChangeEvent } from "react";

interface CustomInputProps {
  type: string;
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  min?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  readOnly,
  min,
  onClick,
  startIcon,
}) => {
  return (
    <div className="flex items-center py-2 px-4 rounded-xl border text-gray-500 bg-white gap-2">
      {startIcon && <div className="flex-shrink-0">{startIcon}</div>}
      <input
        type={type}
        className="w-full outline-none flex-grow"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        readOnly={readOnly}
        onClick={onClick}
      />
    </div>
  );
};

export default CustomInput;
