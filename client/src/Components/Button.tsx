import '../Assets/styles/button.css'

interface ButtonProps {
  handleClick: Function,
  text: string,
}

export default function Button({handleClick, text}: ButtonProps) {
  return(
    <button onClick={() => handleClick()}>{text}</button>
  )
}