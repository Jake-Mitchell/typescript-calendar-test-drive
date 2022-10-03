import React from "react";
import { Calendar } from "../calendar/Calendar";
import s from "./DatePicker.module.css";

export const DatePicker: React.FC<{}> = ({}) => {
  return (
    <div className={s.container}>
      <div className={s.backgroundContainer} />
      <div className={s.calendarContainer}>
        <Calendar />
      </div>
    </div>
  );
};
