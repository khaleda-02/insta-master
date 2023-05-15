import React from 'react'
import Calendar from '../../components/dashboardComp/CalendarComp/Calendar';
import Dashboard from '../../hoc/Dashboard';

const CalendarPage = () => {
  const content = (<Calendar />);

  return (
    <Dashboard chlidren={content} />
  )
}

export default CalendarPage
