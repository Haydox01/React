import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increament(){
    //   this.setState({
    //     counter: this.state.counter + 1
    //   })
       
    //   console.log(this.state.counter)
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count)

    
    }
    increamentFive(){
      this.increament()
      this.increament()
      this.increament()
      this.increament()
      this.increament()
    }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increamentFive()}>Increment</button>
        </div>
    )
  }
}

export default Counter