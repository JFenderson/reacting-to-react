import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

// const App = (props) => {
//     return <h1>hello, {props.name}</h1>
// };

class App extends React.Component{
    constructor(props,text){
        super(props,text);
        this.state = {
            name: ''
        };
    };

    handleChange(name) {
        this.setState({ name });
    }
    render(){
        const person = this.state.name;
        return(
            <div>
            <h1>hello, {this.props.name}</h1>
                <input 
                value={this.state.name} 
                onChange={(e) => { this.handleChange(e.target.value) }} />
            </div>
        )
    }
}

// ReactDOM.render(App ,document.getElementById('root'));

export default App;