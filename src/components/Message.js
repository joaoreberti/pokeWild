import React, {Component} from "react";
import "./Battle.css"

class Message extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg : props.msg,
            style:""

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({style:"typewriter"})
            this.setState(this.props)
        }
            
        

    }

    render(){
        return(
        <div className=" message"><p className={`${this.state.style}`}>{this.state.msg}</p></div>
        )
    }
}

export default Message