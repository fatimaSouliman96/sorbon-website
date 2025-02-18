import { optionsValues } from "@/constant/comboBoxData";
import Image from "next/image";
import React from "react";

interface ComboBoxProps {
  label: string;
  options: optionsValues[];
}

const ComboBox: React.FC<ComboBoxProps> = ({ label, options }) => {
  return (
    <div className="relative w-full">
      {/* Custom Arrow */}
      <Image
      width={5}
      height={9}
        src="/arrow-down.svg"
        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4"
        alt="Dropdown Arrow"
      />

      {/* Select Dropdown */}
      <select className="w-full border-b text-white border-white bg-transparent appearance-none text-gray-border-white p-2">
        <option className="text-gray-border-white bg-gray-border-white">{label}</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-white border-white bg-white "
          >
            {option.options}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
