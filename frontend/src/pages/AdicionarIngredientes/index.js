import React, { Component } from 'react'
import FormIngredientes from '../../components/FormIngredientes'
import './styles.css'

class AdicionarIngredientes extends Component {
    render(){
        return (
            <div className='container-inicio'>  
                <h2>Adicione os ingredientes</h2>
                <FormIngredientes />
            </div>
        );
    }
}

export default AdicionarIngredientes;