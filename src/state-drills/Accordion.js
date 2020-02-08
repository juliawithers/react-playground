import React, { Component } from 'react'

export default class Accordion extends Component {
    state = {
        currentId: null
    };

    setId=(secId)=>{
            this.setState({currentId: secId})
    }

    renderText(section,id,currentId){
        <li class="list-info" key={id}>
        <button
        onClick={()=>setId(this.section.id)}
        >
            {section.title} 
        </button>
        
            {(currentId === id && 
            <p>
                {sections.content}
            </p>)}           
        </li>  
    }

    render(){
        return(
            <ul>
                {this.sections.map((section,id)=>
                renderText(section,id,currentId)
                )}
            
            </ul>
        )
    } 
}