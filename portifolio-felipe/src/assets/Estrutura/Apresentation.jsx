import './Apresentation.css'
import Button from '../Componentes/Button'
import { useState, useEffect } from 'react'

function Apresentation(){
        const [text, setText] = useState('')
        const toRotate = ['meu nome é Felipe Assis ','sou desenvolvedor front end','como posso te ajudar?']
        const [loop, setLoop] = useState(0)
        const [isDeleting, setIsDeleting] = useState(false)
        const period = 100
        const [delta, setDelta] = useState(100)
        
        useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return ()=> {clearInterval(ticker)}
        
        }, [text])
        
        const toType = () => {
        
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText);
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop+1)
        }
        

        
        }
        
        
        
        
        
       
    return(
        <div className='apresentation'>
            <h1>Olá, {text}</h1>
            <h2>Estudo Programação buscando sempre me atualizar <br />
            usar FrameWorks atuais. Apesar de jovem já tenho <br />
             uma certa experiencia 
            e vou tentar te ajudar da melhor forma </h2>
            <Button text='Saiba Mais'/>
        </div>
    )
}
export default Apresentation