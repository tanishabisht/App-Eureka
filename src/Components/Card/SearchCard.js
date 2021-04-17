import {StackBtn} from '../../Common'
import GithubLogo from '../../Images/githubLogo.svg'
import LinkLogo from '../../Images/linkLogo.svg'
// import ChatLogo from '../../Images/chatLogo.svg'
import './card.scss'

const SearchCard = ({id, projName, projDesc, stacks, projLinks, devfolioLink}) => {
  return (
    <div className='cardWrapper'>
        <a href={devfolioLink}><h3>{projName}</h3></a>
        <p>{projDesc}</p>
        {stacks.map((stack) => <StackBtn>{stack}</StackBtn>)}
        <div style={{textAlign:'right'}}>
          {projLinks.map((link) => {
            if(link.slice(8,14)==='github') return <a className='ml-1' href={link}><img src={GithubLogo} alt='gitHubLogo'/></a>
            else return <a className='ml-1' href={link}><img src={LinkLogo} alt='linkLogo'/></a>
          })}
        </div>
    </div>
  )
}
export default SearchCard



// <a className='ml-1' href={'/search/'+id}><img src={ChatLogo} alt='chatLogo'/></a>
