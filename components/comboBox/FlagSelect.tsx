import React from 'react'

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface FlagSelectProps {

  options: {
    name: string, code: string, phone: number 
  } [];
  style?: string;
  value: number | undefined;
  onChange: (value: number) => void;
}


const FlagSelect: React.FC<FlagSelectProps> = ({ options, style, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Country code");
  const [searchChar, setSearchChar] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = searchChar
    ? options.filter((option) =>
        option.name.toLowerCase().startsWith(searchChar.toLowerCase())
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
    <div className="relative w-[30%]" ref={dropdownRef}>
      {/* Label */}
      

     

      {/* Dropdown Button */}
      <button
        type='button'
        onClick={() => {
          setIsOpen(!isOpen);
          setSearchChar("");
        }}
        className={
          style
            ? `${style} w-full flex justify-between items-center appearance-none focus:outline-none`
            : "w-full flex justify-between items-center border border-b-0 border-white bg-transparent text-white p-2 appearance-none focus:outline-none"
        }
      >
        <span className="text-sm text-gray-400">{selected }</span>
        <Image
          width={12}
          height={12}
          src={ style ? "/arrow-right-blue.svg" : `/arrow-down.svg`}
          className={`${style && "rotate-90"} ml-2 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          alt="Dropdown Arrow"
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute w-full h-44 overflow-y-scroll overflow-x-hidden mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.name}
                className="p-2 hover:bg-gray-200 cursor-pointer text-black"
                onClick={() => {
                  setSelected(option.name);
                  onChange(option.phone)
                  setIsOpen(false);
                  setSearchChar("");
                }}
              >
               {option.name}
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

export default FlagSelect;
