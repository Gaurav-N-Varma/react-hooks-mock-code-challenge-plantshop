import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plantList, 
  onChangeAddPlant,
  onChangeSearchText,
  onPriceUpdate,
  onPlantDelete
}) {
  return (
    <main>
      <NewPlantForm 
        onChangeAddPlant={onChangeAddPlant}
      />
      <Search 
        onChangeSearchText={onChangeSearchText}
      />
      <PlantList
        plantList={plantList}
        onPriceUpdate={onPriceUpdate}
        onPlantDelete={onPlantDelete}
      />
    </main>
  );
}

export default PlantPage;
