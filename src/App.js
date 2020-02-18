// import React from 'react';
// import Split from './composition/Split';
// import './App.css';
// import Tooltip from './composition/Tooltip';

// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//     ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )
// function App() {
//   return (
//     <main className='App'>
      
//       <Split className='left' flexBasis={2}>
//       This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         <Tooltip>
//         Necessitatibus?
//         </Tooltip>
//       </Split>
//       <Split className='right'>
//       This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>
      
//     </main>
//   );
// }

// export default App;


// import React, { Component } from 'react';
// import './App.css';
// // import Messages from './Messages';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>YOUR APPLICATION NAME!</h1>
//         <div>Hello!</div>
//         <Messages name="Messages" unread={0}/>
//         <Messages name="Notifications" unread={10}/>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import './App.css';
// import Accordion from './state-drills/Accordion'

// const sections= [
//       {
//         title: 'Section 1',
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//       },
//       {
//         title: 'Section 2',
//         content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//       },
//       {
//         title: 'Section 3',
//         content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//       },
//     ]

// class App extends Component {
//   render() {

//     return (
//       <div className="App">
//         <Accordion sections={sections}/>
//       </div>
//     );
//   }
// }

// export default App;

// Shopping List _______________________________----
// import React, { Component } from 'react';
// import './App.css';
// import ShoppingList from './shopping-list/ShoppingList'
// import AddItemForm from './shopping-list/AddItemForm'


// class App extends Component{
//   state = {
//     shoppingItems: [
//       {name: 'apples', checked: false},
//       {name: 'oranges', checked: true},
//       {name: 'bread', checked: false},
//     ]
//   };


//   handleDeleteItem = (item) => {
//     console.log('handle deleted item',{ item })
//     const newItems = this.state.shoppingItems.filter(itm => itm !== item)
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

//   handleCheckItem = (item) => {
//     console.log('handle checked item',{ item })
//     const newItems = this.state.shoppingItems.map(itm => {
//       if(itm === item){
//         itm.checked = !itm.checked
//       }
//       return itm
//     })
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

//   handleAddItem = (itemName) => {
//     console.log('handle adding an item',{ itemName })
//     const newItems = [
//       ...this.state.shoppingItems,
//       {name: itemName, checked: false}
//     ]
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

//   render(){
//     return(
//       <>
//       <header>
//         <h1> Shopping List </h1>
//       </header>
//       <main>
//         <section>
//           <AddItemForm 
//             onAddItem = {this.handleAddItem}
//           />
//         </section>
//         <section> 
//           <ShoppingList items ={this.state.shoppingItems}
//           // add two callback props here
//           onDeleteItem = {this.handleDeleteItem}
//           onCheckItem = {this.handleCheckItem}
//           />
//         </section>
//       </main>
//       </>
//     )
//   }
    
  
// }

// export default App;


// import React, { Component } from 'react';
// import './App.css';

// import DemonynApp from './demonymapp/demonymApp';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <DemonynApp/>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import './App.css';

import DemonynApp from './practice/DogBreedSearch';

class App extends Component {

  
  state={
    breeds: [],
    selectedBreed: "",
    picture: ""
  }

  componentDidMount(){
    const url = 'https://dog.ceo/api/breeds/list/all';
    fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        breeds: data.message
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    })
  }

  render() {
    return (

      <div className="App">
        
        {/* list of dog breeds to select */}
          <DogBreedSearch 
            breed={this.state.breeds}/>
        {/* render the picture */}
        <div>
          {/* call api for picture to render here */}
        </div>
      </div>
    );
  }
}

export default App;


