import React, {Component} from "react";

class Pokemon1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            hp: props.stats.hp,
            isLoading: false,
            name: props.stats.name,
            url: props.stats.url,
            sprite: props.stats.spriteBack,
            hp: props.stats.pokemonStats
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState(this.props)
        }

        
    }  
   
    render(){
        return(
            <div className="anchor" onClick={() => this.props.onAttack('a')}>
                {this.state.name}
                <img src={`${this.state.sprite}`} />
                

            </div>
            )
    }
}

export default Pokemon1 