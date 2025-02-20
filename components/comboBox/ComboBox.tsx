import { useState, useRef, useEffect } from "react";
import { optionsValues } from "@/constant/comboBoxData";
import Image from "next/image";

interface ComboBoxProps {
  label: string;
  options: optionsValues[];
}

const ComboBox: React.FC<ComboBoxProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center border-b border-white bg-transparent text-white p-2 appearance-none focus:outline-none"
      >
        {selected}
        <Image
          width={12}
          height={12}
          src="/arrow-down.svg"
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          alt="Dropdown Arrow"
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="p-2 hover:bg-gray-200 cursor-pointer text-black"
              onClick={() => {
                setSelected(option.options);
                setIsOpen(false);
              }}
            >
              {option.options}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
