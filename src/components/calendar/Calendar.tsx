import { Date, Weekday } from "../../../types";
import { Weekdays } from "../../configs/Weekdays";
import { monthDates } from "../../configs/Monthdays";
import s from "./Calendar.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "../../assets/icons";

const generateDates = (date: number) => {
  for (let i = 0; i < 7; i++) {
    return (
      <button className={s.date} value={date}>
        <p className={`${s.day} ${date === 18 ? s.today : ""}`}>{date}</p>
      </button>
    );
  }
};

const generateWeeks = (dates: Array<Date>) => {
  const daysInWeek = 7;
  let result = []; // there may be a better name for this!

  for (let i = 0; i < dates.length; i += daysInWeek) {
    result.push(dates.slice(i, i + daysInWeek));
  }

  return result;
};

export const Calendar: React.FC<{}> = ({}) => {
  return (
    <div className={s.container}>
      <div className={s.datePickerContainer}>
        <ChevronLeftIcon />
        <span>February 2023</span>
        <ChevronRightIcon />
      </div>
      <div className={s.weekdaysContainer}>
        {Weekdays.map((day) => (
          <div className={s.weekday}>{day}</div>
        ))}
      </div>
      <div className={s.calendar}>
        {generateWeeks(monthDates).map((week) => (
          <div className={s.week}>
            {week.map((day) => generateDates(day.day))}
          </div>
        ))}
      </div>
    </div>
  );
};
