import './inputTextbox.scss'

const InputTextbox = ({placeholder}) => {
  return (
    <input className='inputTextbox my-5 mx-auto' type='text' placeholder={placeholder} />
  )
}

export default InputTextbox