import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    return (
        <div className = "lista-suspensa">
            <label>{props.titulo}</label>
            <select onChange={evento => props.alterado(evento.target.value)}required = {props.required} value= {props.valor}>
                {props.itens.map(item => {
                    return <option key = {item} >{item}</option> 
                    })}
            </select>
        </div>


    );


}


export default ListaSuspensa
