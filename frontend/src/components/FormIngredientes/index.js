import React, {useEffect, useState} from 'react'
import Logo from '../../assets/images/logo.png'
import './styles.css'
import { Card, Select, Input, Button } from 'element-react'
import api from '../../services/http'
import { useHistory } from 'react-router'



export default function FormIngredientes(){

    const [massa, setMassa] = useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [observacao, setObservacao] = useState([]);
    const [massaSelect, setMassaSelect] = useState([]);
    const [bebidasSelect, setBebidasSelect] = useState([]);
    const history = useHistory();


    useEffect(() =>{
        api.get('massa')
        .then(res => {
            Promise.resolve(res.data)
            setMassa(res.data)
        })
        .catch(err => {
            Promise.reject(err)
            alert('Não foi possível Obter Massas')
        })

        api.get('acompanhamentos')
        .then(res => {
            Promise.resolve(res.data)
            setBebidas(res.data)
        })
        .catch(err => {
            Promise.reject(err)
            alert('Não foi possível Obter Acompanhamentos')
        })
    }, [])

    async function handlerAdicionar(e){
        e.preventDefault();

        try {
            localStorage.setItem('observacao', observacao)
            localStorage.setItem('massa', massaSelect)
            localStorage.setItem('acompanhamento', bebidasSelect)
            history.push('/finalizar-pedido')

        } catch {
            alert('Não foi possivel adicionar ingredientes')
        }
    }
    
    return(
        <div className='container-ingredientes'>
            <Card className='card-box'>
                <img src={Logo} alt='img'/>
                
                <h5 className='text'>Tipo da Massa</h5>
                <Select className='select' onChange={setMassaSelect}>
                    {
                        massa.map(el => {
                            return <Select.Option key={el.id} label={el.nome} value={el.nome} />
                        })
                    }
                </Select>
                
                
                <h5 className='text'>Bebidas</h5>
                <Select className='select' onChange={setBebidasSelect}>
                    {
                        bebidas.map(el => {
                            return <Select.Option key={el.id} label={el.nome} value={el.nome} setMassaSelect/>
                        })
                    }
                </Select>
                                
                <h5 className='text'>Adicione Observações. (retirar cebola etc...)</h5>
                <Input 
                    placeholder='observações' 
                    className='input-observacao'
                    onChange={setObservacao}
                >
                </Input>
                
                <Button 
                    type='primary' 
                    className='button-adicionar'
                    onClick={handlerAdicionar}
                >
                Adicionar
                </Button>
            </Card>
        </div>
    );
}