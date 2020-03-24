import React, { Component } from "react";
import "./List.css";
import P1 from "./P1";
import P2 from "./P2";

class List extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      isLoading: false,
      pokemon1: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
      pokemon1Locked: false,
      pokemon2: {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
    pokemon2Locked : false,
    battle: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleSubmit() {

  }

  handleDoubleClick(e) {
    e.persist();
    console.log(e.target.name);
    if ((this.state.pokemon1Locked)) {
      this.setState({ pokemon2: this.state.pokemons[e.target.name] });
    }else{
        this.setState({
           pokemon1: {
            name : this.state.pokemons[e.target.name].name,
            url :  this.state.pokemons[e.target.name].url,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.target.name}.png`
                     } 
           
           });
        console.log(this.state.pokemons[e.target.name])

    }
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then(result => result.json())
      .then(data =>
        this.setState({ pokemons: data.results, isLoading: false })
      );
  }

  render() {
    return (
      <main>
        {this.state.isLoading && <h1>Loading</h1>}
        <div className="grid">
          {this.state.pokemons &&
            this.state.pokemons.map((item, index) => {
              return (
                <div
                  onClick={this.handleDoubleClick}
                  name={index}
                  key={index}
                  className="cell"
                >
                  {" "}
                  <img
                    name={index}
                    alt=""
                    key={index + 150}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
                      1}.png`}
                  />{" "}
                  <p name={index} key={index + 300}>
                    {item.name.toUpperCase()}
                  </p>{" "}
                </div>
              );
            })}
        </div>
        <div className="players">
          {" "}
          <P1 pokemon={this.state.pokemon1} />
          <button onClick={this.handleSubmit}>Battle</button>
          <P2 pokemon={this.state.pokemon2} />
        </div>
      </main>
    );
  }
}

export default List;
