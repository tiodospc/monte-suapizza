import React, { Component } from 'react'
import CardFinalizado from '../../components/CardFinalizado'
import './styles.css'

class PedidoFinalizado extends Component {
    render(){
        return (
            <div className='container-inicio'>  
                <h2>Pedido finalizado!</h2>
                <h3>aguarde seu pedido será entregue dentre alguns minutos</h3>
                <CardFinalizado />
            </div>
        );
    }
}

export default PedidoFinalizado;