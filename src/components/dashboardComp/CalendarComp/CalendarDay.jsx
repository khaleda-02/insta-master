import { format } from "date-fns";

function CalendarDay({ day, days, handler }) {
  const handleClick = (d) => {
    console.log(d);
    handler(d);
  };

  return (
    <tr key={day}>
      {days.map((d) => (
        <td key={d} className="text-center px-0 py-[8px] md:px-[10px]" onClick={() => handleClick(format(d, "dd - MMM - yy"))} >
          <label htmlFor="my-modal-3" className="btn text-white font-bold md:text-xl w-full h-full bg-transparent border-none hover:bg-transparent">{format(d, "d")}</label>
        </td>
      ))}
    </tr>
  );
}

export default CalendarDay;
