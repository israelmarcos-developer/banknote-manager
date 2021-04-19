import React, { Component } from 'react';
import FormeCadastro from "./components/FormeCadastro";
import ListaNotas from "./components/ListaNotas"

class App extends Component {
  render(){
    return (

      <section>

      <FormeCadastro/>
      <ListaNotas/>
  
      </section>
    );
    
  }
}

export default App;
