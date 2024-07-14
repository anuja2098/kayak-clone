import React from "react";
import staysCardData from "../lib/staysCardData";

const StaysCards = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-20">What KAYAK brings to the table.</h1>
      <div className="flex m-6 gap-8 ">
        {staysCardData.map((item) => (
          <section className="w-72 h-60 border border-gray-300 rounded-lg p-3" key={item.id}>
            <item.icon className=" h-16 w-16 bg-orange-200 text-orange-700 mb-4 rounded-lg p-4 " />
            <h3 className="font-bold">{item.heading}</h3>
            <p>{item.detail}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default StaysCards;
