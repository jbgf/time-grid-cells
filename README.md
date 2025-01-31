This project helps users visualize their time allocation through intuitive grids:
✨ Life View: Interactive age grid (up to 80 years) with animated water ripple showing current year's progress percentage
📅 Nested Time Perspectives: Year/Month/Week/Day views with similar visualization patterns
🎯 Core Purpose: Promote time consciousness using fading color schemes (gray for past, green for future) to prioritize meaningful matters

![image](https://github.com/user-attachments/assets/c5be2176-55bc-4ee4-b80c-8419c1c9f497)


## Installation

Using pnpm (recommended):
```bash
pnpm install
```
### TypeScript Interface
```typescript
type TimeUnit = 'year' | 'month' | 'day' | 'hour';

interface TimeGridCellsProps {
  lifeExpectancy: number;
  currentYear: number;
  birthDate: string;
  isEditing: boolean;
  maxValue: number;
  unit: TimeUnit;
}
```
### Usage
```typescript
  <TimeGridCells
    lifeExpectancy={lifeExpectancy}
    currentYear={currentYear}
    birthDate={birthDate}
    isEditing={isEditing}
    maxValue={tempLifeExpectancy!}
    unit="year"
  />
```


## Official Demo Site
https://www.5minutetimer.app/time-account

## Contributing

We welcome contributions! Please see our contributing guidelines for details.

## License

MIT


