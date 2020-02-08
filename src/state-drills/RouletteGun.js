import React, { Component } from 'react'

export default class RouletteGun extends Component {
    state={
        chamber: null,
        spinningTheChamber: false,
    };

    static defaultProps = {
        bulletInChamber: 8
    }

    whatChamber = () => {
        console.log('called')
        this.setState({
          spinningTheChamber: true 
        })
        console.log(this.state)
        // timeout??
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.round(Math.ceil(Math.random()*8)),
                spinningTheChamber: false})
            }, 2000)
            console.log(this.state)
    }
    componentWillUnmount(){
        clearTimeout(this.timeout)
    }
// create function for the render
    createText = () => {

        if(this.state.spinningTheChamber){
            return 'spinning the chamber and pulling the trigger! ....'
        }

        if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!!'
        }

        return "you're safe"
        
    }

    render() {
        console.log(this.state)
        const textToRender = this.createText()

        return(
            <div>
                <p>
                    {textToRender}
                </p>
                <button onClick={this.whatChamber}>Pull the trigger!</button>
            </div>
        )
    }
}