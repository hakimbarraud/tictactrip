import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Iconly } from "react-iconly";

const SelectDate = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="p-3 rounded-lg mt-2 bg-neutral-100 flex gap-2 w-full overflow-hidden">
      <div className="flex items-center w-1/2">
        <div>
          <Iconly
            name="Calendar"
            set="bold"
            primaryColor="darkgray"
            size="medium"
          />
        </div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="EE, d MMM"
          className="bg-neutral-100 border-r-2 outline-none pl-2"
          calendarStartDay={1}
          placeholderText="Choose a date"
        />
      </div>
      <div className="w-1/2">
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="EE, d MMM"
          className="bg-neutral-100 outline-none placeholder:text-neutral-400 pl-2"
          placeholderText="+ Add return"
          calendarStartDay={1}
        />
      </div>
    </div>
  );
};

export default SelectDate;
