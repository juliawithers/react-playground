import React, {Component} from 'react';
import GetBreedList from './GetBreedList'

export default class DogBreedSearch extends Component{

    render(){
        return(
            
            <div>   
                <form>
                    <legend>Select Dog Breed</legend>
                    <select>
                        {/* <option>call to the api</option> */}
                        <GetBreedList 
                        breeds={this.props.breeds}/>
                    </select>
                    <button 
                        type="submit"
                        onClick={}
                    >Submit</button>
                </form>
            </div> 
        )
    }
}
