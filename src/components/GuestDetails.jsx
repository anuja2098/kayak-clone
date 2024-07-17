import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import React from "react";
import { useDispatch } from "react-redux";

import { Label } from "../components/ui/label";

import { Input } from "./ui/input";
import { setGuestDetails } from "../lib/hotelBookingSlice";

const GuestForm = ({ index }) => {
  const dispatch = useDispatch();

  const handleTitleChange = (value) => {
    dispatch(setGuestDetails({ key: "title", value, index }));
  };

  const handleFirstNameChange = (value) => {
    dispatch(setGuestDetails({ key: "firstName", value, index }));
  };

  const handleLastNameChange = (value) => {
    dispatch(setGuestDetails({ key: "lastName", value, index }));
  };

  return (
    <div>
      <div className="border border-gray-200 p-4 mt-6 shadow-lg w-[850px]   rounded-xl">
        <div className="flex gap-5 justify-between">
          <div>
            <Label className="text-md">Title</Label>
            <Select onValueChange={handleTitleChange}>
              <SelectTrigger className=" h-10 w-32">
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
            <Label className="text-md">
              First Name & (Middle name, if any)
            </Label>
            <Input
              placeholder="First Name"
              className="w-[300px]  h-10"
              onChange={(e) => handleFirstNameChange(e.target.value)}
            ></Input>
          </div>

          <div>
            <Label className="text-md">Last Name</Label>
            <Input
              className="w-[300px] h-10"
              placeholder="Last Name"
              onChange={(e) => handleLastNameChange(e.target.value)}
            ></Input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestForm;
