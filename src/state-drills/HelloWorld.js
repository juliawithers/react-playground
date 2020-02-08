import React from 'react'

class HelloWorld extends React.Component{
// world should come from state in a property named who
    
    state = {
        who: "world"
    }
    
    
    render(){
        return(
            <div>
                <p>
                    Hello, {this.state.who}
                </p>
                <button onClick={ () =>  this.setState({
                    who: "world"})}>
                    World

                </button>
                <button onClick={ () =>  this.setState({
                    who: "friend"})}>
                    Friend
                </button>
                <button onClick={ () =>  this.setState({
                    who: "react"})}>
                    React
                </button>
            </div>
        )
    }
}

export default HelloWorld
// When a user clicks on one of the 3 buttons, use state and an event handler to update the state property who so that the content in the p element changes.
// If the user clicks the "Friend" button, the p displays Hello, friend!.
// If the user clicks the "React" button, the p displays Hello, React!.
// If the user clicks the "World" button, the p displays Hello, world!.