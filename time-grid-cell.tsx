'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import './style.css';

type TimeUnit = 'year' | 'month' | 'day' | 'hour';

interface TimeGridCellProps {
  index: number;
  currentIndex: number;
  isEditing?: boolean;
  maxValue?: number;
  unit: TimeUnit;
  label?: string;
  birthDate?: string;
}

export default function TimeGridCell({
  index,
  currentIndex,
  isEditing = false,
  maxValue,
  unit,
  label,
  birthDate
}: TimeGridCellProps) {
  const [progress, setProgress] = useState(0);
  const cellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index === currentIndex) {
      const calculateProgress = () => {
        const now = new Date();
        let progress = 0;

        switch (unit) {
          case 'year':
            const birthDayOfThisYear = new Date(now.getFullYear(), new Date(birthDate!).getMonth(), new Date(birthDate!).getDate());
            const lastBirthday = dayjs(birthDayOfThisYear)?.isBefore(now) ? birthDayOfThisYear : dayjs(birthDayOfThisYear)?.subtract(1, 'year');
            const nextBirthday = dayjs(birthDayOfThisYear)?.isAfter(now) ? birthDayOfThisYear : dayjs(birthDayOfThisYear)?.add(1, 'year');
            progress = dayjs().diff(lastBirthday, 'day') / dayjs(nextBirthday).diff(lastBirthday, 'day');
            break;
          case 'month':
            const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
            progress = (now.getDate() - 1 + now.getHours() / 24) / daysInMonth;
            break;
          case 'day':
            progress = (now.getHours() + now.getMinutes() / 60) / 24;
            break;
          case 'hour':
            progress = now.getMinutes() / 60;
            break;
        }
        setProgress(progress * 100);
      };

      calculateProgress();
      const interval = setInterval(calculateProgress, 60000); // Update every minute
      return () => clearInterval(interval);
    }
  }, [index, currentIndex, unit, birthDate]);

  const getCellStatus = () => {
    if (index < currentIndex) return 'past';
    if (index === currentIndex) return 'current';
    return 'future';
  };

  const getCellClassName = () => {
    const status = getCellStatus();
    const baseClasses = 'aspect-square rounded-lg relative transition-all duration-300 overflow-hidden group';

    const statusClasses = {
      past: 'bg-gray-200',
      current: 'bg-lime-700',
      future: 'bg-lime-700'
    };
    const editingClass = maxValue && index >= maxValue && isEditing ? 'opacity-50' : '';

    return `${baseClasses} ${statusClasses[status]} ${editingClass}`;
  };

  const getCellTextColor = () => {
    const status = getCellStatus();

    const statusClasses = {
      past: 'text-gray-600',
      current: 'text-white',
      future: 'text-white'
    };
    return statusClasses[status];
  };

  const getLabel = () => {
    if (label) return label;
    switch (unit) {
      case 'year':
        return index;
      case 'month':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index];
      case 'day':
        return index + 1;
      case 'hour':
        return `${index}:00`;
      default:
        return index;
    }
  };

  return (
    <motion.div
      ref={cellRef}
      key={index}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.01 }}
      className={getCellClassName()}
      style={{ '--progress': `-${progress + 100}%` } as React.CSSProperties}
    >
      {/* Label */}
      <span className={`absolute top-1 left-1 text-xs ${getCellTextColor()} z-10`}>
        {getLabel()}
      </span>

      {/* Water Animation for Current Cell */}
      {index === currentIndex && (
        <div className="timeGridCells-timeCell">
          <div className="timeGridCells-water">
            <div className="timeGridCells-waterContent">
              <div className="timeGridCells-waterProgress hidden sm:block">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
} 