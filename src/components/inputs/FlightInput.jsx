import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane } from "lucide-react";
import AirportData from "../ui/AirportData";

import React from "react";

const FlightInput = ({ onChange }) => {
  const handleChange = (value) => {
    onChange(value);
  };
  return (
    <div>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[250px]">
          <Plane />
          <SelectValue placeholder="Roam around" />
        </SelectTrigger>
        <SelectContent>
          {AirportData.map((item) => (
            <SelectItem value={item.iata}>
              <section className=" p-3 h-20 w-64">
                <div className="flex">
                  <div className="font-bold text-lg ">
                    {item.city}, {item.country}
                  </div>
                  <div className="text-gray-400 ml-3 text-lg"> {item.iata}</div>
                </div>
                <div className="text-gray-400">{item.name}</div>
              </section>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FlightInput;
