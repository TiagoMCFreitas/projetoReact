import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa  from '../ListaSuspensa'; 
import Botao from '../Botao';
import { useState } from 'react' 

const Formulario = (props) => {
   
    const Salvar = (evento) =>{
        evento.preventDefault()
        props.colaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('Programação')
    }
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(props.times[0])
    

    return (
        <section className = "formulario">
            <form onSubmit={Salvar} >
             <h2>Preencha os dados para criar o card do colaborador</h2>
             <CampoTexto obrigatorio = {true} 
             titulo="Nome" 
             placeholder = "Digite o seu nome"
             valor = {nome}
             alterado = {valor => setNome(valor)}
             />
             <CampoTexto obrigatorio = {true} 
             titulo="Cargo" 
             placeholder = "Digite o seu cargo"
             valor = {cargo}
             alterado = {valor => setCargo(valor)}
             />
             <CampoTexto 
             titulo="Imagem" 
             placeholder = "Digite a url da sua imagem"
             valor = {imagem}
             alterado = {valor => setImagem(valor)}
             />
             <ListaSuspensa 
             obrigatorio = {true} 
             titulo ="Time" 
             itens = {props.times}          
             valor = {time}
             alterado = {valor => setTime(valor)}
             />
             <Botao texto= "Criar Card"/>
             
             </form>
        </section>
    );
}

export default Formulario