import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ComboBoxProps {
  label: string;
  options: { options: string,
    value: number | string, }[];
  value: number | string | null; // بدلًا من number فقط
  onChange: (value: number | string | null , text: string | null) => void;
  style?: string;
}


const ComboBox: React.FC<ComboBoxProps> = ({ label, options, style, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(!style && label);
  const [searchChar, setSearchChar] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = searchChar
    ? options.filter((option) =>
      option.options.toLowerCase().startsWith(searchChar.toLowerCase())
    )
    : options;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchChar("");
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Listen to keyboard letters
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (isOpen && /^[a-zA-Z0-9أ-ي]$/.test(e.key)) {
        setSearchChar(e.key);
      }
      if (e.key === "Escape") {
        setSearchChar("");
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Label */}
      {style && <label className="text-[#FFFFFF99] block ">{label}</label>}


      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setSearchChar("");
        }}
        className={
          style
            ? `${style} pb-[0.5px] w-full flex justify-between items-center appearance-none focus:outline-none`
            : "w-full flex justify-between items-center border-b border-white bg-transparent text-white p-2 appearance-none focus:outline-none"
        }
      >
        <span className={`${style ? "text-gray-400 text-sm h-5" : "text-white"} `}>{selected}</span>
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
        <ul className={`${options.length > 3 ? "h-28" : "h-fit"} absolute w-full  overflow-y-scroll mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10`}>
          <li
            className="p-2 hover:bg-gray-200 cursor-pointer text-black"
            >
            
          </li>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.value}
                className="p-2 hover:bg-gray-200 cursor-pointer text-black"
                onClick={() => {
                  setSelected(option.options);
                  onChange(option.value, option.options)
                  setIsOpen(false);
                  setSearchChar("");
                }}
              >
                {option.options}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;


