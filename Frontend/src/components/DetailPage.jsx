import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

function DetailPage() {
  return (
    <div className="max-h-screen w-full bg-black overflow-hidden">
      <h1 className="text-white text-center">Trending</h1>
      <div className="max-h-[80vh] overflow-auto flex justify-start items-start flex-wrap ms-8 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination/>
    </div>
  );
}

export default DetailPage;
