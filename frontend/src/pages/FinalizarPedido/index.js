import React, { Component } from 'react'
import FormFinalizar from '../../components/FormFinalizar'
import './styles.css'

class FinalizarPedido extends Component {
    render(){
        return (
            <div className='container-finalizar'>  
                <h2>Revise os items e digite o endereço</h2>
                <h3>Escolha os sabores</h3>
                <FormFinalizar />
            </div>
        );
    }
}

export default FinalizarPedido;