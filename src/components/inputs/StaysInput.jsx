import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { HousePlus } from "lucide-react";
import LocationData from "../ui/LocationData";
const StaysInput = ({ onChange }) => {
  const handleChange = (value) => {
    console.log(value);
    onChange(value);
  };
  return (
    <div>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[350px]">
          <HousePlus />
          <SelectValue placeholder="  Enter a city, airpot, or landmark" />
        </SelectTrigger>
        <SelectContent>
          {LocationData.map((item) => (
            <SelectItem value={item.value}>
              <section className=" p-3 w-64">
                <div className="font-bold text-lg ">{item.label}</div>
              </section>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default StaysInput;
