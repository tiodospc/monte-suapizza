import React from 'react'
import { Card, Button, Alert} from 'element-react'
import entregador from '../../assets/images/entregador.jpg'
import './styles.css'
import { useHistory } from 'react-router'

export default function FormFinalizar(){
    const history = useHistory();
    
    async function handlerNovoPedido(e){
        e.preventDefault();
        try {
            localStorage.clear();
            history.push('/')
        } catch {
            Alert('Não foi possível redirecionar')
        }
    }

    return(
        <div>
            <Card className='card-box-final'>
                <img src={entregador} alt='entregador'/>

                <Button
                    className='button-redirecionar'
                    type='primary'
                    onClick={handlerNovoPedido}
                >
                    Montar outra pizza
                </Button>
            </Card>
        </div>
    );
}