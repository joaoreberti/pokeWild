import React, {Component} from "react";
import "./Battle.css"

class Message extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg : props.msg,

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState(this.props)
        }
            
        

    }

    render(){
        return(
        <div className=" message"><p className="typewriter">{this.state.msg}</p></div>
        )
    }
}

export default Message