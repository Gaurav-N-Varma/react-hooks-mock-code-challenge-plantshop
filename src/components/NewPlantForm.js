import React from "react";

function NewPlantForm({onChangeAddPlant}) {

  // when the user clicks submit, the below function runs
  function handleSubmit(e) {
    e.preventDefault()

    // update the API with the new plant
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name : e.target.name.value,
        image : e.target.image.value,
        price : e.target.price.value
      })
    })

    // we want to send the data inputted to the App component ...
    // where it will call a setter to update the plantList state
    onChangeAddPlant({
      name : e.target.name.value,
      image : e.target.image.value,
      price : e.target.price.value
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
