import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    plants: [],
    filteredPlants: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((response) => {
        this.setState({
          plants: response.data.plantsData,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   this.setState({
  //     filteredPlants: this.state.plants.filter((plant) => {
  //       return plant.name
  //         .toLowerCase()
  //         .includes(this.props.search.toLowerCase());
  //     }),
  //   });
  // }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    let filteredPlants = this.state.plants.filter((plant) => {
      return plant.name.toLowerCase().includes(this.props.search.toLowerCase());
    });
    return (
      <main className="plant-list">
        {filteredPlants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
