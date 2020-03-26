import React, { Component } from "react";
import "./Battle.css"


class Pokemon1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.stats.name,
            hp: props.stats.hp,
            attacks: props.stats.atks,
            sprite: props.stats.spriteBack,
            isLoading: false,
            attackStats:[]

        }

        this.updateHealthBar = this.updateHealthBar.bind(this)
    }

    updateHealthBar(hp) {
        let newBAr = Math.round((hp * 200) / this.state.maxHp)
        return newBAr
    }



    componentDidMount() {
        const maxHp = this.state.hp
        this.setState({ maxHp });
            


    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState(this.props)
        }
            
        

    }

    render() {
        return (
            <div className="anchor">
                <img className="pokemon1" src={`${this.state.sprite}`} />
                <div className="hpbox">
                    <div>{this.state.name}</div>


                    <div className="hpbar">
                        <div style={{ width: `${this.updateHealthBar(this.state.hp)}px` }} className="currentHp"></div>
                    </div>
                </div>

                <div className="atk">{this.state.attacks ? this.state.attacks.map((atk, index) => <li key={index} onClick={() => this.props.onAttack(atk)}>{atk.name}</li>) : <li>Loading</li>}</div>



            </div>
        )
    }
}

export default Pokemon1 