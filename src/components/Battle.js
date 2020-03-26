import React, { Component } from "react";
import Pokemon1 from "./Pokemon1";
import Pokemon2 from "./Pokemon2";
import "./Battle.css";
import Message from "./Message";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      pokemon1: props.pokemon1,
      pokemon2: props.pokemon2,
      messageOn: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAttack = this.handleAttack.bind(this);
  }

  handleClick(index) {
    console.log(index);
  }

  handleAttack(attack) {
    let dmg;
    fetch(`${attack.url}`)
      .then(response => response.json())
      .then(data => {
        dmg = data.power;
        let newPokemon = { ...this.state.pokemon2 };

        if (dmg) {
          newPokemon.message = `${this.state.pokemon1.name} attacked with ${attack.name}`;
          newPokemon.hp = this.state.pokemon2.hp - parseInt(dmg);
          this.setState({ pokemon2: newPokemon });
        } else {
          newPokemon.message = `${this.state.pokemon1.name} attacked with ${attack.name}. But it wasn't very effective`;
          this.setState({ pokemon2: newPokemon });
        }
        console.log(typeof dmg)
        console.log("Attacks with " + attack.name + dmg);
      });
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`${this.state.pokemon1.url}`)
      .then(result => result.json())
      .then(data => {
        const pokemonStats = data;

        this.setState({
          pokemon1: {
            name: pokemonStats.forms[0].name,
            hp: pokemonStats.stats[5].base_stat,
            atks: [
              pokemonStats.moves[0].move,
              pokemonStats.moves[1].move,
              pokemonStats.moves[3].move,
              pokemonStats.moves[4].move
            ],
            spriteBack: pokemonStats.sprites.back_default
          }
        });
      });
    fetch(`${this.state.pokemon2.url}`)
      .then(result => result.json())
      .then(data => {
        const pokemonStats = data;
        // tes
        this.setState({
          isLoading: false,
          pokemon2: {
            message: `What will ${this.state.pokemon1.name} do? `,

            name: pokemonStats.forms[0].name,
            hp: pokemonStats.stats[5].base_stat,
            atks: [
              pokemonStats.moves[0].move,
              pokemonStats.moves[1].move,
              pokemonStats.moves[3].move,
              pokemonStats.moves[4].move
            ],
            sprite: pokemonStats.sprites.front_default
          }
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div className="battlefield">
            <Pokemon2 stats={this.state.pokemon2} />

            <Pokemon1
              stats={this.state.pokemon1}
              onAttack={this.handleAttack}
            />
            {this.state.messageOn ? (
              <Message
                onMessage={msg => {
                  console.log(msg);
                }}
                msg={this.state.pokemon2.message}
              />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default Battle;
