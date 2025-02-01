import './index.css';
import TimeGridCell from "./time-grid-cell";
type TimeUnit = 'year' | 'month' | 'day' | 'hour';

interface TimeGridCellsProps {
  lifeExpectancy: number;
  currentYear: number;
  birthDate: string;
  isEditing: boolean;
  maxValue: number;
  unit: TimeUnit;
}

export default function TimeGridCells({ unit, lifeExpectancy, currentYear, birthDate, isEditing, maxValue }: TimeGridCellsProps) {
  return <div className="grid grid-cols-10 gap-2">
    {Array.from({ length: lifeExpectancy + 1 }).map((_, index) => (
      <TimeGridCell
        key={index}
        index={index}
        currentIndex={currentYear}
        birthDate={birthDate}
        isEditing={isEditing}
        maxValue={maxValue}
        unit={unit}
        label={String(index)}
      />
    ))}
  </div>;
};
