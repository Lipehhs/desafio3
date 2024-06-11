import './Projects.css'
import Card from '../Componentes/Card'
import PrimeiraImg from './site-pronto-padrao-simples.jpg'

function Projects() {
    return (
        <div className="projeto">
            <h1 id='pro'>Projetos</h1>
            <div className="card-box">


                <Card titulo='Projeto 1'
                    text='Site generico que fiz para preencher o desafio
            peguei a imagem na internet não achei uma com uma resolução melhor
            :('
                    imagem={PrimeiraImg} />

                <Card titulo='Projeto 2'
                    text='Site generico que fiz para preencher o desafio
            peguei a imagem na internet não achei uma com uma resolução melhor
            :('
                    imagem={PrimeiraImg} />

                <Card titulo='Projeto 3'
                    text='Site generico que fiz para preencher o desafio
            peguei a imagem na internet não achei uma com uma resolução melhor
            :('
                    imagem={PrimeiraImg} />

                <Card titulo='Projeto 4'
                    text='Site generico que fiz para preencher o desafio
            peguei a imagem na internet não achei uma com uma resolução melhor
            :('
                    imagem={PrimeiraImg} />

            </div>


        </div>


    )
}

export default Projects