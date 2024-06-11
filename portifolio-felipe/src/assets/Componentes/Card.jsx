import './Card.css'
import Button from './Button'

function Card({imagem, text,  titulo}){
    return(
        <div className="card">
            <img src={imagem}  alt="Carregar Imagem" />
            <h1>{titulo}</h1>
            <p>{text}</p>
            <Button text='Clique aqui'/>
        </div>
    )
}

export default Card