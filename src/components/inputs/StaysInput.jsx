import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { HousePlus } from "lucide-react";

const StaysInput = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[350px]">
          <HousePlus />
          <SelectValue placeholder="Theme" />
          Enter a city, airpot, or landmark
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="system"></SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default StaysInput;
