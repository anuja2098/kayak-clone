import React from "react";

const convertMinutesToHoursAndMinutes = (totalMinutes) => {
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  return `${hours} hr ${minutes} min`;
};

const DurationComponent = ({ totalMinutes }) => {
  const duration = convertMinutesToHoursAndMinutes(totalMinutes);

  return <div className="font-bold">{duration}</div>;
};

export default DurationComponent;
