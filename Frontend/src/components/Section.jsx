import React from "react";
import Card from "./Card";

function Section({ title }) {
  return (
    <div className="trending ms-12 mt-12">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-medium">{title}</h3>
        <h6 className="text-white me-12">See More</h6>
      </div>
      <div className="w-full flex justify-start items-center flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Section;
