import React, { Component } from 'react';
import './App.css';
import DisplaySimpsons from "./components/DisplaySimpsons";

class App extends Component {
    state = {
        Quote:[]
    };

    componentDidMount() {
       fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
           .then(response => response.json())
           .then(response => this.setState({Quote:response}));

    }
    next = () => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
            .then(response => response.json())
            .then(response => this.setState({Quote:response}));
    };


  render() {
      console.log(this.state.Quote);
    return (
      <div className="App">
          {
              this.state.Quote.map((simp,id) => {
                  return (
                      <div>
                          <DisplaySimpsons
                            key={id}
                            simp={simp}
                            next={()=>this.next()}
                          />
                      </div>
                  )
              })
          }


      </div>
    );
  }
}

export default App;
