import './Button.css'

function Button({ text, link }){
    return(
          <div className='btn'>
            <a href={link}>
                <button>{text}</button>
            </a>
          </div>
    )
    
}
export default Button