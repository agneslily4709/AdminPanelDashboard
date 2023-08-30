import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

// Setup the localizer by providing the moment object
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      title: 'Final exam',
      start: new Date(2023, 8, 5, 10, 0), // Year, Month (0-indexed), Day, Hour, Minute
      end: new Date(2023, 8, 5, 12, 0),
    },
  ];

  return (
    <div className='container'>
      <h3 className='text-center'>My Calendar</h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 ,border:"2px solid navy",borderRadius:"20px",padding:"40px"}} // Set the height of the calendar
      />
    </div>
  );
};

export default MyCalendar;
