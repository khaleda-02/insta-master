import React, { useState } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';
import EditorComp from "../EditComp";
import CalendarDay from './CalendarDay';
import Popup from './Popup';
import EditComp from '../EditComp';

function CalendarTable({ date }) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const rows = [];
  const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(day);
      day = addDays(day, 1);
    }
    rows.push({ day, days })
    days = [];
  }

  const [selectedDay, setSelectedDay] = useState(null);
  const selectedDayHandler = (date) => {
    setSelectedDay(date);
  }

  return (
    <table className="calendar-table md:h-[90%]">
      <thead>
        <tr>
          {WEEK_DAYS.map((day) => (
            <th>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          rows?.map((row) =>
            (<CalendarDay day={row.day} date={date} days={row.days} monthStart={monthStart} handler={selectedDayHandler} />)
          )
        }

        {
          selectedDay && <Popup data={selectedDay} />
        }

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <EditorComp />
          </div>
        </div>
      </tbody>
    </table>
  );
}

export default CalendarTable;