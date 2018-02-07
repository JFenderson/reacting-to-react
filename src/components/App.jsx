import React, { Component, Fragment } from 'react';
//import ReactDOM from 'react-dom';

// const App = (props) => {
//     return <h1>hello, {props.name}</h1>
// };

class App extends React.Component{
    constructor(props,text){
        super(props,text);
        this.state = { name: 'hih'};
    };

    handleChange(name) {
        this.setState({ name });
    }

    toggleHasLoaded = () => {
        this.setState({
            hasLoaded: !this.state.hasLoaded
        });
    }

    componentDidMount(){
        this.setState({
            hasLoaded: true
        })
    }
    render(){
        // const person = this.state.name;
        // const text = "";
        if(this.state.hasLoaded){
        return(
            <Fragment>
                    <h1>hello, {this.props.name}</h1>
                        <input placeholder="What's your name?"
                        value={this.state.name} 
                        onChange={(e) => { this.handleChange(e.target.value) }} />
                    <h1> {this.state.name} </h1>
                    
            </Fragment>
        )
        }else{
        return(
            <Fragment>
                <h1>Loading...</h1>
                <button onClick={this.toggleHasLoaded}>click me</button>
            </Fragment>
            )
        }
    }
}

// ReactDOM.render(App ,document.getElementById('root'));

export default App;