import React, {Component} from "react";

class Pokemon2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.stats.name,
            url: props.stats.url,
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
            <div >
                {this.state.name}
                <img src={`${this.state.sprite}`} />

            </div>
            )
    }
}

export default Pokemon2 