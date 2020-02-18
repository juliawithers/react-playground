import React, {Component} from 'react';


export default class GetBreedList extends Component{
    
    render(){
        
        return(
            // render the list
            this.props.breeds.map(dog =>{
                <option value={dog}>dog</option>
            })

        )
    }

}
