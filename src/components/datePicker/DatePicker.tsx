import React from "react";
import s from "./DatePicker.module.css";

export const DatePicker: React.FC<{}> = ({}) => {
  return (
    <div className={s.datePickerContainer}>
      <div className={s.backgroundContainer} />
    </div>
  );
};
