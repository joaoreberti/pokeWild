import React, { Component } from "react"
import Pokemon1 from "./Pokemon1"
import Pokemon2 from "./Pokemon2"
import "./Battle.css"


class Battle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            pokemon1: props.pokemon1,
            pokemon2: props.pokemon2,

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(index) {

        console.log(index)

    }
    componentDidMount() {
        this.setState({ isLoading: true });


        fetch(`${this.state.pokemon1.url}`)
            .then(result => result.json())
            .then(data => {
                const pokemonStats = data

                this.setState({
                    pokemon1: {
                        name: pokemonStats.forms[0].name,
                        hp: pokemonStats.stats[5].base_stat,
                        atks:
                            [pokemonStats.moves[0].move,
                            pokemonStats.moves[1].move,
                            pokemonStats.moves[3].move,
                            pokemonStats.moves[4].move,],
                        spriteBack: pokemonStats.sprites.back_default



                    }
                })
            }
            );
        fetch(`${this.state.pokemon2.url}`)
            .then(result => result.json())
            .then(data => {
                const pokemonStats = data
                // tes
                this.setState({
                    isLoading: false,
                    pokemon2: {
                        name: pokemonStats.forms[0].name,
                        hp: pokemonStats.stats[5].base_stat,
                        atks:
                            [pokemonStats.moves[0].move,
                            pokemonStats.moves[1].move,
                            pokemonStats.moves[3].move,
                            pokemonStats.moves[4].move,],
                        sprite: pokemonStats.sprites.front_default



                    }
                })
            }
            );
    }
    render() {
        return (
            <div>
                {this.state.isLoading ? <h1>Loading</h1> : <div className="battlefield">
                    <Pokemon2 stats={this.state.pokemon2} />

                    <Pokemon1 stats={this.state.pokemon1} onAttack={(attack) => {
                        // Calcular o dano do atak
                        // setState do HP do PKM - DMG
                        console.log("Ataca com " + attack);
                    }} />

                </div>}

            </div>
        )
    }
}

export default Battle;