import React from 'react'

export default class Bomb extends React.Component{
    state = {
        counter: 0,
    };

    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            this.setState({
                counter: this.state.counter +1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updateTimer() {
        if( this.state.counter >= 8){
            console.log(this.state.counter)
            clearInterval(this.interval)
            return 'BOOM!!!!'
        }
        else if (this.state.counter %2 === 0){
            console.log(this.state.counter)
            return 'tick'
        }
        else{
            console.log(this.state.counter)
            return 'tock'
        }
        
    }

    render(){
        return(
            <div>
                <p>
                    {this.updateTimer()}
                </p>
            </div>
        )
    }

}
