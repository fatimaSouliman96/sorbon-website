"use client"
import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

interface TrustCardProps {
  index: number;
  length: number;
  num: string;
  title: string;
}

const TrustCard: React.FC<TrustCardProps> = ({ index, length, title, num }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);
useEffect(() => {
  const node = ref.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartCount(true);
        observer.disconnect(); // لمراقبة العنصر مرة واحدة فقط
      }
    },
    {
      threshold: 0.6,
    }
  );

  observer.observe(node);

  return () => {
    observer.unobserve(node); // ✅ استخدمي المتغير المحلي بدل ref.current
  };
}, []);


  return (
    <div className='flex flex-col items-center justify-center' ref={ref}>
      <div
        className={`${
          index === 0
            ? 'rounded-tl-lg rounded-bl-lg rounded-l-[4px]'
            : index === length - 1
            ? 'rounded-tr-lg rounded-br-lg rounded-l-[4px]'
            : 'rounded-[4px]'
        } bg-gradient-to-r h-[70px] from-[#322A8DD9] to-[#322A8D] flex w-full items-center text-white justify-center backdrop-blur-[11.2px] shadow-[inset_-4.2px_2.8px_2.8px_0px_rgba(18,14,63,0.25)]`}
      >
        <p className='text-2xl text-white font-medium'>
          +{startCount ? <CountUp end={parseInt(num)} duration={2} /> : 0}
        </p>
      </div>
      <p className='text-lg text-center pt-4 font-medium text-secondary'>{title}</p>
    </div>
  );
};

export default TrustCard;
