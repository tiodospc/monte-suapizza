import React, { Component } from 'react'
import FormPedido from '../../components/FormPedido'
import './styles.css'

class Inicio extends Component {
    render(){
        return (
            <div className='container-inicio'>  
                <h2>Bem-vindo ao monte sua pizza!</h2>
                <h3>Escolha os sabores</h3>
                <FormPedido />
            </div>
        );
    }
}

export default Inicio;