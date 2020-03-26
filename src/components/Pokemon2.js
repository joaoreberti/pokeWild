import React, {Component} from "react";
import "./Battle.css"


class Pokemon2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.stats.name,
            hp: props.stats.hp,
            attacks: props.stats.atks,
            sprite: props.stats.sprite
            
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState(this.props)
        }

        
    }  
   
    render(){
        return(
            <div>
                <img className="pokemon2" src={`${this.state.sprite}`} />               


                

            </div>
            )
    }
}

export default Pokemon2 