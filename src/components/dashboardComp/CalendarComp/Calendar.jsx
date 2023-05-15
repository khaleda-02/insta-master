import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';

function Calendar() {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
    // Fetch posts for this month
  };

  const handleNextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
    // Fetch posts for this month
  };

  return (
    <div className="calendar overflow-scroll">
      <CalendarHeader
        date={date}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarTable date={date} />
    </div>
  );
}

export default Calendar;