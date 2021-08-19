
/*import logo from './logo.svg';*/
import React from 'react';
import './App.css';

/*function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
}*/

class Helloworld extends React.Component {

  state = {
    show: true // false
  } 

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      ) 
    } else {
      return <h1> 
        There are not elements
        <button onClick={this.toggleShow}>Toggle Show</button>
        </h1>
    }
   
  }
}

// Otra forma de escribir lo mismo mediante una función flecha
//const App = () => <div>This is my component:<Helloworld/><Helloworld/></div>

/* Otra forma de escribir lo mismo mediante una clase
class App extends React.Component {
  render() {
    return  <div>This is my component:<Helloworld/><Helloworld/></div>
  }
}
*/
// Otra forma de escribir lo mismo mediante una función
function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hello Pablo" subtitle="Props one"/>
      <Helloworld mytext="Hola mundo" subtitle="Dos"/> 
      <Helloworld mytext="Hello" subtitle="Props three"/>
    </div>
  );
}

export default App;
