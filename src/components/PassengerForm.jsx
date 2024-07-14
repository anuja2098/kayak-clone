import React from "react";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import { useDispatch } from "react-redux";

import { Button } from "../components/ui/button";
import { setPassengerDetails } from "../lib/bookingSlice";

const PassengerForm = ({ index }) => {
  const dispatch = useDispatch();

  const handleTitleChange = (value) => {
    dispatch(setPassengerDetails({ key: "title", value, index }));
  };

  const handleFirstNameChange = (value) => {
    dispatch(setPassengerDetails({ key: "firstName", value, index }));
  };

  const handleLastNameChange = (value) => {
    dispatch(setPassengerDetails({ key: "lastName", value, index }));
  };

  // dispatch(setPassengerDetails({ index }));
  return (
    <div className="border border-gray-200 p-4 mt-6 shadow-lg  rounded-xl">
      Adult 1
      <div className="flex justify-between">
        <div>
          <Label>Title</Label>
          <Select onValueChange={handleTitleChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr">Mr</SelectItem>
              <SelectItem value="Ms">Ms</SelectItem>
              <SelectItem value="Mrs">Mrs.</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>First Name & (Middle name, if any)</Label>
          <Input
            placeholder="First Name"
            className="w-[300px]"
            // value={passenger.firstName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
          ></Input>
        </div>

        <div>
          <Label>Last Name</Label>
          <Input
            // value={PassengerForm.lastName}
            placeholder="Last Name"
            onChange={(e) => handleLastNameChange(e.target.value)}
          ></Input>
        </div>
      </div>
    </div>
  );
};

export default PassengerForm;
