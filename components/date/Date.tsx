"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface DateProps {
  form?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const CustomDatePicker: React.FC<DateProps> = ({ form, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const [currentDay, setCurrentDay] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
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

  useEffect(() => {
    if (currentDay === null) return;
  
    const newDate = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(currentDay).padStart(2, "0")}`;
    if (newDate !== value) {
      onChange(newDate);
    }
  }, [currentDay, currentMonth, currentYear, value, onChange]);

  const getDaysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="relative  overflow-visible" ref={calendarRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute right-2 ${form ? "bottom-6" : "top-1/2"} -translate-y-1/2 w-5 h-5`}
      >
        <Image width={20} height={20} src="/date.svg" alt="Calendar Icon" className="pointer-events-none" />
      </button>

      <input
        type="text"
        value={value ? value.split("-").reverse().join(" / ") : ""}
        readOnly
        placeholder="Select a date"
        className={`w-full placeholder:text-white border-b border-white bg-transparent outline-none ${form ? "p-1" : "p-2"} text-white cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute z-50 left-0 mt-1 w-[240px] bg-white text-black rounded-lg shadow-lg p-1">
          <div className="flex items-center justify-between mb-2">
            <button
             type="button"
              onClick={() => {
                if (currentMonth === 0) {
                  setCurrentYear((prev) => prev - 1);
                  setCurrentMonth(11);
                } else {
                  setCurrentMonth((prev) => prev - 1);
                }
              }}
              className="px-2 py-1 hover:bg-gray-200 rounded"
            >
              <Image className="rotate-180" src="/arrow-eylow.svg" width={12} height={12} alt="previous month" />
            </button>

            <span className="text-base text-secondary font-semibold">
              {months[currentMonth]} {currentYear}
            </span>

            <button
               type="button"
              onClick={() => {
                if (currentMonth === 11) {
                  setCurrentYear((prev) => prev + 1);
                  setCurrentMonth(0);
                } else {
                  setCurrentMonth((prev) => prev + 1);
                }
              }}
              className="px-2 py-1 hover:bg-gray-200 rounded"
            >
              <Image src="/arrow-eylow.svg" width={12} height={12} alt="next month" />
            </button>
          </div>

          <div className="w-full h-[1px] bg-[#17133f57]"></div>

          <div className="grid grid-cols-[repeat(7,31px)] mt-2">
            {[...Array(daysInMonth)].map((_, index) => {
              const day = index + 1;
              return (
                <button
                  key={day}
                  onClick={() => {
                    setCurrentDay(day);
                    setIsOpen(false);
                  }}
                  className={`h-6 flex items-center justify-center rounded-md ${
                    day === currentDay ? "bg-secondary text-white" : "hover:bg-gray-300"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;







