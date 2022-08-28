import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantList, setPlantList] = useState([])
  const [searchText, setSearchText] = useState('')

  // fetching the plant list from the API and setting our state to it
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(raw => raw.json())
    .then(data => setPlantList(data))
    .catch(err => console.log(err))
  }, [])

  // adds the new inputted plant to the plant list
  function addPlant(newPlant) {
    setPlantList([...plantList, newPlant])
  }

  const plantsToDisplay = plantList.filter((plant) => {
    return plant.name.toLowerCase().includes(searchText.toLowerCase())
  })

  // when the user updates the plant price, call the setter to update plantList
  function handlePriceUpdate(updatedPlant) {
    const updatedList = plantList.map(plant => {
      if(plant.id === updatedPlant.id) {
        return updatedPlant
      } else {
        return plant
      }
    })
    setPlantList(updatedList)
  }

  // when a user deletes a plan, updates plantList state
  function handlePlantDelete(deletedPlant) {
    const updatedList = plantList.filter(plant => {
      return !(deletedPlant.id === plant.id)
    })
    setPlantList(updatedList)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plantList={plantsToDisplay}
        onChangeAddPlant={addPlant}
        onChangeSearchText={setSearchText}
        onPriceUpdate={handlePriceUpdate}
        onPlantDelete={handlePlantDelete}
      />
    </div>
  );
}

export default App;
