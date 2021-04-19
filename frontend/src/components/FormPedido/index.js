import React, { useEffect, useState } from 'react'
import { Card, Select, Input, Button, Alert } from 'element-react'
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import api from '../../services/http'
import './styles.css'

export default function FormPedido() {
    const [pizzas, setPizzas] = useState([]);
    const [tamanhos , setTamanhos] = useState([]);
    const [pizzaSelect, setPizzaSelect] = useState([]);
    const [tamanhoSelect , setTamanhoSelect] = useState([]);
    const [borda , setBorda] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        api.get('pizzas')
        .then(res => {
            Promise.resolve(res.data)
            setPizzas(res.data)
        })
        .catch(err => {
            Promise.reject(err)
            alert('Não foi possível Obter produtos')
        })

        api.get('tamanhos')
        .then(res => {
            Promise.resolve(res.data)
            setTamanhos(res.data)
        })
        .catch(err => {
            Promise.reject(err)
            alert('Não foi possível Obter produtos')
        })
    },[])

    async function handlerMontar(e){
        e.preventDefault();
        
        let id = Math.floor(Math.random()*100)

        try{
            localStorage.setItem('id', id)
            localStorage.setItem('sabor', pizzaSelect)
            localStorage.setItem('tamanho', tamanhoSelect)
            localStorage.setItem('borda', borda)
            history.push('/adicionar-ingredientes')
        } catch {
            alert('NÃO FOI POSSÍVEL GRAVAR PEDIDO')
        }

    }


    return(
        <div className='container-formPedido'>
            {
                pizzas.map(el => {
                    if(el.nome === pizzaSelect && el.pontos){
                        return <Alert className='alert' title="Parabéns você ganhou pontos por selecionar a pizza do dia"/>
                    }
                })
            }
            <Card className='card-box'>
                <img src={Logo} alt='img'/>
                
                {
                    pizzas.map(el => {
                        if(el.pontos){
                            return <h4>Segestão do dia: {el.nome}</h4>
                        }
                    })    
                }
                
                <Select className='select' onChange={setPizzaSelect}>
                {
                    pizzas.map(el => {
                        return <Select.Option key={el.id} label={el.nome} value={el.nome} />
                    })
                }
                </Select>

                <Select className='select' onChange={setTamanhoSelect}>
                {
                    tamanhos.map(el => {
                        return <Select.Option key={el.id} label={el.nome} value={el.nome} />
                    })
                }
                </Select>
                
                <Input 
                    placeholder='Digite a borda...' 
                    className='input-borda'
                    onChange={setBorda}
                />
                
                <Button 
                    type='primary' 
                    className='button-montar'
                    onClick={handlerMontar}
                >
                    Montar
                </Button>
            </Card>
        </div>
    );
}



