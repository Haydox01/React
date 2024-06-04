<<<<<<< HEAD
class Message extends Component {
    render(){
        return (
            <h1>
                Welcome Visitor
            </h1>
        )
    }
    }
    export default Message;
=======
import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render(){
        return( <div>

            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </div>
            
            ) 
    }
}

export default Message;
>>>>>>> 6d1b871bd0f7a82a6106bdc3857582cc2da4db2e
