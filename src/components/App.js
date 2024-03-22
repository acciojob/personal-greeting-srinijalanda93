
// import React from "react";
// import './../styles/App.css';

// // const App = () => {
// //   return (
// //     <div>
// //         {/* Do not remove the main div */}
// //     </div>
// //   )
// // }

// import { Component } from "react";

//  class App extends Component {
//   //constructor for props
//   constructor(props) {
//     super(props);
//     this.state={value:""};
//   }
//   //render to compute the jsx
//   render() {
//    const  changeEvent=(event) =>{
//         console.log(event.target)
//         console.log(event.target.value);
//         const newValue=event.target.value;
//         this.setState({value:newValue});

//     }
//     return (<>
    
//         <p>Enter your name:</p>
//         <input id="input" value={this.state.value} onChange={changeEvent} />
//         {/* conditional rendering */}
//         {this.state.value?<p>Hello {this.state.value}!</p>:null}
   
//     </>);
//   }
// }


// export default App

import React, { useState } from "react";
import './../styles/App.css';
const App = () => {
  const [count ,setcount] = useState("");
  let entry =(e) =>{
      setcount("Hello " + e.target.value + "!");
  }
  return (
    <div>
       <input type="text" 
       onChange={entry}
       />
       <p>{count}</p>
    </div>
  )
}
export default App