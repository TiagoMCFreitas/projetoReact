import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react'
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  
  const times = [
     {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },{
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },{
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }

  ]

  const novoColaborador = (colaborador) =>{
        console.log(colaboradores)
        setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} colaboradorCadastrado = {colaborador=> novoColaborador(colaborador)}/>
      {times.map(time => <Time 
       key = {time.nome}
       nome = {time.nome} 
       corPrimaria = {time.corPrimaria} 
       corSecundaria = {time.corSecundaria}
       colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
       />)}
    </div>
  );
}

export default App;
