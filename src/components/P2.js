import React, { Component } from "react";
import "./players.css";
class P2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.pokemon.name,
      url: props.pokemon.url,
      sprite: props.pokemon.sprite
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        name: this.props.pokemon.name,
        url: this.props.pokemon.url,
        sprite: this.props.pokemon.sprite

        
      });
    }  }

  render() {
    return (
      <div key={this.state.name} className="player2">
        CPU
        <p> {this.state.name}</p>
        <img alt="qtpie" src={`${this.state.sprite}`} />{/* <p>Url : {this.state.url}</p> */}
      </div>
    );
  }
}

export default P2;
