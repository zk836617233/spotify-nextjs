"use client";

import type {
  UseFormRegister,
  FieldValues,
  FieldErrors,
} from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  placeholder,
  errors,
}) => {
  return (
    <div>
      <div className="mb-2">
        <label className="font-bold text-sm">{label}</label>
      </div>
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register(id, { required })}
        className="input-shadow rounded-md w-full text-base py-3 px-4 border-0 outline-none shadow-input-shadow disabled:opacity-70 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default Input;
