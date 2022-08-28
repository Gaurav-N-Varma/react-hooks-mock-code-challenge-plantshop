import React, { useState } from "react";

function PlantCard({
  plant,
  onPriceUpdate,
  onPlantDelete
}) {
  const [isClicked, setIsClicked] = useState(true)
  const [isUpdateClicked, setIsUpdateClicked] = useState(false)

  function handleUpdate() {
    // when the user hits update, we want to send a PATCH request to the API
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: document.querySelector('#price').value }),
    })
    // at the same time we want to send the updated data back up to update the state
    .then(raw => raw.json())
    .then(updatedPlant => onPriceUpdate(updatedPlant))
  }

  // when delete is clicked, updates the API and then ...
  // ... sends the plant back up to update the plantList state 
  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    })
    
    onPlantDelete(plant)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isClicked ? (
        <button 
          className="primary" 
          onClick={() => setIsClicked(false)}
        >
          In Stock
        </button>
      ) : (
        <button 
        onClick={() => setIsClicked(true)}
        >
          Out of Stock
        </button>
      )}
      {isUpdateClicked ? (
        <div>
          <input type="number" id='price' name="price" step="0.01" placeholder="Price" />
          <button 
            className="primary"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button 
            className="primary"
            onClick={() => setIsUpdateClicked(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="primary"
          onClick={() => setIsUpdateClicked(true)}
        >
          Update Price
        </button>
      )}
      <button 
        className="primary"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
