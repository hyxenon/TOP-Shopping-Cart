import React from "react";
import Card from "../components/Card";
import data from "../data/data";

const Women = () => {
  const WomenElements = data[1].items.map((item) => (
    <Card key={item.id} {...item} />
  ));
  return (
    <main className="px-16 mt-16 grow">
      <h1 className="text-primary text-4xl font-bold text-center">Women</h1>
      <div className="mt-28 grid grid-cols-4 gap-4">
        {WomenElements}
        {WomenElements}
      </div>
    </main>
  );
};

export default Women;
