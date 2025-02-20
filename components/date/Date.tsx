"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const CustomDatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const calendarRef = useRef<HTMLDivElement>(null);

  // Close calendar when clicking outside
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

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const months = [
    { name: "January", num: 1 },
    { name: "February", num: 2 },
    { name: "March", num: 3 },
    { name: "April", num: 4 },
    { name: "May", num: 5 },
    { name: "June", num: 6 },
    { name: "July", num: 7 },
    { name: "August", num: 8 },
    { name: "September", num: 9 },
    { name: "October", num: 10 },
    { name: "November", num: 11 },
    { name: "December", num: 12 },
  ];

  return (
    <div className="relative w-full" ref={calendarRef}>
      {/* Calendar Icon */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5"
      >
        <Image width={20} height={20} src="/date.svg" alt="Calendar Icon" className="pointer-events-none" />
      </button>

      {/* Input Field */}
      <input
        type="text"
        value={selectedDate || ""}
        readOnly
        placeholder="Date"
        className="w-full placeholder:text-white border-b border-white bg-transparent outline-none p-2 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Calendar */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-72 bg-white text-black rounded-lg shadow-lg p-4 z-10">
          {/* Month & Year Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3 justify-between items-center mb-2">
              <button onClick={() => setCurrentYear(currentYear - 1)} className="px-2 py-1 hover:bg-gray-200 rounded">
                <Image className="rotate-180" src="/arrow-eylow.svg" width={12} height={12} alt="arrow" />
              </button>
              <span className="text-base text-secondary font-semibold">{currentYear}</span>
              <button onClick={() => setCurrentYear(currentYear + 1)} className="px-2 py-1 hover:bg-gray-200 rounded">
                <Image src="/arrow-eylow.svg" width={12} height={12} alt="arrow" />
              </button>
            </div>

            <div className="flex gap-3 justify-between items-center mb-2">
              <button
                onClick={() => setCurrentMonth((currentMonth + 11) % 12)}
                className="px-2 py-1 hover:bg-gray-200 rounded"
              >
                <Image className="rotate-180" src="/arrow-eylow.svg" width={12} height={12} alt="arrow" />
              </button>
              <span className="text-base text-secondary font-semibold">{months[currentMonth].name}</span>
              <button
                onClick={() => setCurrentMonth((currentMonth + 1) % 12)}
                className="px-2 py-1 hover:bg-gray-200 rounded"
              >
                <Image src="/arrow-eylow.svg" width={12} height={12} alt="arrow" />
              </button>
            </div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-2">
            {[...Array(daysInMonth)].map((_, index) => {
              const day = index + 1;
              return (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDate(`${day} / ${months[currentMonth].num} / ${currentYear}`);
                    setIsOpen(false);
                  }}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-300 rounded-full"
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



