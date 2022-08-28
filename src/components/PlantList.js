import React from "react";
import PlantCard from "./PlantCard";

function PlantList({
  plantList,
  onPriceUpdate,
  onPlantDelete
}) {
  return (
    <ul className="cards">
      {plantList.map(plant => {
        return <PlantCard
          key={plant.name}
          plant={plant}
          onPriceUpdate={onPriceUpdate}
          onPlantDelete={onPlantDelete}
        />
      })}
    </ul>
  );
}

export default PlantList;
