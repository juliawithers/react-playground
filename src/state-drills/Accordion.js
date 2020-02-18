import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Accordion extends Component {
    static defaultProps = {
        sections: []
    };
    state = {
        currentId: null,
    }

    setId = (secId) => {
            this.setState({currentId: secId})
    }

    renderText(section,id,currentId){
        return(
            <li className="list-info" key={id}>
                <button
                type='button' 
                onClick={() => this.setId(id)}
                >
                    {section.title} 
                </button>
            
                {(currentId === id && 
                <p>
                    {section.content}
                </p>)}           
            </li>  
        )
    }

    render(){
        const { sections } = this.props
        const { currentId } = this.state
        return(
            <ul>
                {sections.map((section,id)=>
                this.renderText(section,id,currentId)
                )}
            
            </ul>
        )
    } 
}