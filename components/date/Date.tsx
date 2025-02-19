"use client"
import { useState } from "react";
import Image from "next/image";

const CustomDatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // توليد أيام الشهر الحالي
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

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
    <div className="relative w-full">
      {/* أيقونة التقويم */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5"
      >
        <Image width={20} height={20} src="/date.svg" alt="Calendar Icon" className="pointer-events-none" />
      </button>

      {/* حقل الإدخال */}
      <input
        type="text"
        value={selectedDate || ""}
        readOnly
        placeholder="Date"
        className="w-full placeholder:text-white border-b border-white bg-transparent outline-none p-2 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* التقويم */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-72 bg-white text-black rounded-lg shadow-lg p-4 z-10">
          {/* التنقل بين الأشهر والسنوات */}
          <div className="flex items-center justify-between" >
            <div className="flex gap-3 justify-between items-center mb-2">
              <button onClick={() => setCurrentYear(currentYear - 1)} className="px-2 py-1 hover:bg-gray-200 rounded">
                <Image className="rotate-180" src='/arrow-eylow.svg' width={12} height={12} alt="arrow" />
              </button>
              <span className="text-base text-secondary font-semibold">{currentYear}</span>
              <button onClick={() => setCurrentYear(currentYear + 1)} className="px-2 py-1 hover:bg-gray-200 rounded">
              <Image  src='/arrow-eylow.svg' width={12} height={12} alt="arrow" />
              </button>
            </div>

            <div className="flex gap-3 justify-between items-center mb-2">
              <button onClick={() => setCurrentMonth((currentMonth + 11) % 12)} className="px-2 py-1 hover:bg-gray-200 rounded">
              <Image className="rotate-180" src='/arrow-eylow.svg' width={12} height={12} alt="arrow" />
              </button>
              <span className="text-base text-secondary font-semibold">{months[currentMonth].name}</span>
              <button onClick={() => setCurrentMonth((currentMonth + 1) % 12)} className="px-2 py-1 hover:bg-gray-200 rounded">
              <Image src='/arrow-eylow.svg' width={12} height={12} alt="arrow" />
              </button>
            </div>
          </div>

          {/* عرض الأيام */}
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


