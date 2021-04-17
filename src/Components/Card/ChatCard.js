import './card.scss'

const ChatCard = ({username, chat}) => {
  return (
    <div className='cardWrapper'>
        <h3>{username}</h3>
        <p>{chat}</p>
    </div>
  )
}
export default ChatCard