import React, {useEffect, useState} from 'react'
import './styles.css'
import { Card, Rate, Input, Button } from 'element-react'
import api from '../../services/http'
import { useHistory } from 'react-router'



export default function FormFinalizar(){
    const [endereco, setEndereco] = useState([])
    const [avaliacao, setAvaliacao] = useState([])
    const [estrela, setEstrela] = useState([])
    const [pontos, setPontos] = useState([])
    const [pizza, setPizza] = useState([])
    const history = useHistory();
    
    useEffect(() => {
        api.get('pizzas')
        .then(res => {
            Promise.resolve(res.data)
            setPizza(res.data)
        })
    },[])

    async function handlerPontos(){
        pizza.map(el => {
            if(el.nome === localStorage.getItem('sabor') && el.pontos){
                setPontos(el.pontos)
            } 
        })
    }

    async function handlerFinalizar(e){
        handlerPontos();
        e.preventDefault();
        let id = localStorage.getItem('id')
        let sabor = localStorage.getItem('sabor')
        let tamanho = localStorage.getItem('tamanho')
        let massa = localStorage.getItem('massa')
        let borda = localStorage.getItem('borda')
        
        const data = {
            id,
            sabor,
            tamanho,
            massa,
            borda,
            endereco,
            avaliacao,
            estrela,
            pontos
        }
        
        try{
            api.post('pedidos', data)
            history.push('/pedido-finalizado')
            
        } catch {
            alert('Não foi possível finalizar pedido')
        }
    }

    return(
        <div>
            <Card className='card-box'>
                <h3>Número do pedido: #{localStorage.getItem('id')}</h3>
                <h3>Sabor: {localStorage.getItem('sabor')}</h3>
                <h3>Tamanho: {localStorage.getItem('tamanho')}</h3>
                <h3>Massa: {localStorage.getItem('massa')}</h3>
                <h3>Borda:  {localStorage.getItem('borda')}</h3>
                <h3>Observações: {localStorage.getItem('observacoes')}</h3>
                {
                    pizza.map(el => {
                        if(el.nome === localStorage.getItem('sabor') && el.pontos){
                            return <h3>Pontos: {el.pontos}</h3>
                        }
                    })
                }

                <Input 
                    placeholder='digite seu endereço'
                    className='input-endereco'
                    onChange={setEndereco}
                >
                </Input>
               
                <Input
                    type="textarea"
                    autosize={{ minRows: 2, maxRows: 4}}
                    placeholder="Deixe comentarios..."
                    onChange={setAvaliacao}
                />
                
                <Rate
                    className='estrelas'
                    showText={true}
                    texts={['ruim', 'regular', 'normal', 'bom', 'excelente']}
                    onChange={setEstrela}
                />

                <Button 
                    className='button-finalizar'
                    type='primary'
                    onClick={handlerFinalizar}
                >
                Finalizar Pedido
                </Button>
            </Card>
        </div>
    );
}