import React from "react";
import Card from "../components/Card";
import data from "../data/data";
const Collection = () => {
  const MensElements = data[0].items.map((item) => (
    <Card key={item.id} {...item} />
  ));
  const WomenElements = data[1].items.map((item) => (
    <Card key={item.id} {...item} />
  ));
  return (
    <main className="px-16 grow">
      <h1 className="mt-16 text-4xl font-bold text-center">
        Trending Sneakers this Month
      </h1>

      {/* Men Section */}
      <div className="">
        <h1 className="mt-16 text-3xl text-primary font-bold">Men</h1>
        <div className="mt-14 grid grid-cols-4 gap-4">{MensElements}</div>
      </div>

      {/* Women Section */}
      <div>
        <h1 className="mt-16 text-3xl text-primary font-bold ">Women</h1>
        <div className="mt-14 grid grid-cols-4 gap-4">{WomenElements}</div>
      </div>
    </main>
  );
};

export default Collection;
