import { JSX as JSX_2 } from 'react';

export declare const TimeGridCells: ({ unit, lifeExpectancy, currentYear, birthDate, isEditing, maxValue }: TimeGridCellsProps) => JSX_2.Element;

declare interface TimeGridCellsProps {
    lifeExpectancy: number;
    currentYear: number;
    birthDate: string;
    isEditing: boolean;
    maxValue: number;
    unit: TimeUnit;
}

declare type TimeUnit = 'year' | 'month' | 'day' | 'hour';

export { }
