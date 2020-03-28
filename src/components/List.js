import React, { Component } from "react";
import "./List.css";
import P1 from "./P1";
import P2 from "./P2";
import Battle from "./Battle";

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
        spriteBack: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
      },
      pokemon1Locked: false,
      pokemon2: {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
      pokemon2Locked: false,
      battle: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleSubmit(e) {
    if (e.target.name === "ready1") {
      this.setState({ pokemon1Locked: true })

    } else if (e.target.name === "ready2") {
      this.setState({ pokemon2Locked: true })

    } else if (e.target.name === "battle") {
      this.state.pokemon1Locked && this.state.pokemon2Locked ? this.setState({ battle: true }) : alert('lock your options')
    }


  }

  handleDoubleClick(index) {
    
    console.log(index);
    if ((this.state.pokemon1Locked)) {
      this.setState({
        pokemon2: {
          name: this.state.pokemons[index].name,
          url: this.state.pokemons[index].url,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseFloat(index)+1}.png`,
        }
      });
    } else {
      this.setState({
        pokemon1: {
          name: this.state.pokemons[index].name,
          url: this.state.pokemons[index].url,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseFloat(index) + 1}.png`,
          spriteBack: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${parseFloat(index) + 1}.png`
        }

      });
      console.log(this.state.pokemons[index])

    }
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(result => result.json())
      .then(data =>
        this.setState({ pokemons: data.results, isLoading: false })
      );
  }

  render() {
    return (
      <div className="landingPage">
        {this.state.battle ? <Battle pokemon1={this.state.pokemon1} pokemon2={this.state.pokemon2} /> : <main>
          {this.state.isLoading && <h1>Loading</h1>}
          <div className="grid">
            {this.state.pokemons &&
              this.state.pokemons.map((item, index) => {
                return (
                  <div
                    onClick={() => this.handleDoubleClick(index)}
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
            <button className="go"name="battle" onClick={this.handleSubmit}>GO</button>
            <P2 pokemon={this.state.pokemon2} />
          </div>
          <div className="readys" >
          <button className="ready1" onClick={this.handleSubmit} name="ready1">Ready?</button>
          <button className="ready2" onClick={this.handleSubmit} name="ready2">Ready?</button>
          </div>


        </main>}

      </div>

    );
  }
}

export default List;
