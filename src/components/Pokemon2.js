import React, { Component } from "react";
import "./Battle.css";

class Pokemon2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        stats: {
            name: props.stats.name,
      hp: props.stats.hp,
      attacks: props.stats.atks,
      sprite: props.stats.sprite,
      isLoading: false,
      attackStats: []
        }
      
    };

    this.updateHealthBar = this.updateHealthBar.bind(this);
  }

  updateHealthBar(hp) {
    let newBAr = Math.round((hp * 200) / this.state.maxHp);
    return newBAr;
  }

  componentDidMount() {
    const maxHp = this.state.stats.hp;
    this.setState({ maxHp });
  }


 

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState(this.props);
      this.updateHealthBar(this.state.stats.hp)
      if (this.props.turn){
          this.props.randomAttack(this.props.stats.atks)
        }
        
    }
  }

  render() {
    return (
      <div className="anchorTop">
        <div className="hpbox2">
          <div>{this.state.stats.name}</div>

          <div className="hpbar">
            <div
              style={{ width: `${this.updateHealthBar(this.state.stats.hp)}px` }}
              className="currentHp"
            ></div>
          </div>
        </div>
        <img className="pokemon2" src={`${this.state.stats.sprite}`} />
      </div>
    );
  }
}

export default Pokemon2;
