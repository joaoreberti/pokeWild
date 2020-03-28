import React, {Component} from "react";
import List from "./List"
import "./Window.css"
class Window extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className="landingPage">
            <List />
            </div>
        )
    }
}

export default Window;