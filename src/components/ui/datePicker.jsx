import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker({ mode = "single", onChange }) {
  const [date, setDate] = React.useState();

  const today = new Date();

  React.useEffect(() => {
    if (mode === "single") {
      setDate();
    } else {
      const date = {
        from: new Date(),
        to: addDays(new Date(), 10),
      };
      setDate(date);
      onChange(date);
    }
  }, [mode]);

  console.log(mode, date);

  const handleChange = (value) => {
    onChange(value);
    setDate(value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {mode === "single" ? (
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] h-12 justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-10 w-4 " />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        ) : (
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] h-12 justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          disabled={{ before: today }}
          mode={mode}
          selected={date}
          defaultMonth={mode === "single" ? new Date() : date?.from}
          onSelect={handleChange}
        />
      </PopoverContent>
    </Popover>
  );
}
