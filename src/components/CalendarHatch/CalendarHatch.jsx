import { checkDate } from "../../lib/checkDate";
import style from "./CalendarHatch.module.scss";

export const CalendarHatch = ({
  day,
  isOpen,
  callback,
  icon,
  message,
  link,
}) => {
  return (
    <div
      onClick={() => (checkDate(day) ? callback(message, link, day) : null)}
      className={
        style.calendarHatchStyle +
        " " +
        (isOpen && style.open) +
        " " +
        (checkDate(day) && style.available)
      }
    >
      {!isOpen ? day : icon}
    </div>
  );
};
