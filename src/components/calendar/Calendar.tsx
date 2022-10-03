import { Date, Weekday } from "../../../types";
import { Weekdays } from "../../configs/Weekdays";
import s from "./Calendar.module.css";

export const Calendar: React.FC<{}> = ({}) => {
  return (
    <div className={s.container}>
      <div className={s.datePickerContainer}></div>
      <div className={s.weekdaysContainer}></div>
      <div className={s.calendar}></div>
    </div>
  );
};
