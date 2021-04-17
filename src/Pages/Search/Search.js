import {useEffect, useState} from 'react'
// import {InputTextBox} from '../../Common'
import {SearchCard} from '../../Components'
import './search.scss'
import { array } from 'prop-types'

const axios = require('axios')

const Search = () => {
    
    const [allData, setAllData] = useState([])
    const [url, setUrl] = useState('')

    
    useEffect(() => {
        axios.get('https://hackobackendapis.herokuapp.com/fetchAll')
        .then((res)=> {
            setAllData(res.data.slice(0,20))
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])


    // const dbVals = [
    //     {id: 0, projName:'PROJ NAME 1', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['#', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'},
    //     {id: 1, projName:'PROJ NAME 2', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['#', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'},
    //     {id: 2, projName:'PROJ NAME 3', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['#', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'},
    //     {id: 3, projName:'PROJ NAME 4', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['#', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'},
    //     {id: 4, projName:'PROJ NAME 5', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['https://github.com/shivamanand1/Gr', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'}
    // ]

    const searchList = [
        {label: 'safety and wellbeing', fetchUrl: 'fetchSafety'},
        {label: 'mental health', fetchUrl: 'fetchSafety'},
        {label: 'miscellaneous', fetchUrl: 'fetchMisc'},
        {label: 'health and wellness', fetchUrl: 'fetchSafety'},
        {label: 'general wellfare', fetchUrl: 'fetchSafety'},
        {label: 'technology', fetchUrl: 'fetchTech'},
        {label: 'education', fetchUrl: 'fetchSafety'},
        {label: 'science and research', fetchUrl: 'fetchScience'},
        {label: 'special mention', fetchUrl: 'fetchSpecialMention'}
    ]

    const nameList = [
        'proj name 1',
        'proj name 2',
        'proj name 3',
        'proj name 4',
        'proj name 5',
        'proj name 6',
        'proj name 7',
        'proj name 8',
        'proj name 9',
        'proj name 10',
        'proj name 11',
        'proj name 12',
        'proj name 13',
        'proj name 14',
    ]

    const onSubmit = (inpVal) => {
        var searchThis
        nameList.forEach(projName => {
            if(projName===inpVal) searchThis = projName
        })
        setUrl(`https://hackobackendapis.herokuapp.com/fetchbyName/${searchThis}`)
    }

    // /fetchbyName/{name}

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>

                    <input list="browsers" name='browsers' className='inputTextbox my-5 mx-auto' type='text' placeholder='Enter some text here ...' />
                    
                    <select class="form-control">
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                    </select>
                    
                    <datalist id="browsers" className='search_datalist'>
                        {searchList.map(({label}) => <option className='search_datalist' value={label} />)}
                    </datalist>                    
                    
                    {allData ? 
                        allData.map(({name, desc, stacksUsed, githubLinks, devfolioLink}) => <SearchCard projName={name} projDesc={desc} stacks={stacksUsed} projLinks={githubLinks} devfolioLink={devfolioLink} />):
                        <div className="loader">Loading ...</div>
                    }

                </div>            
            </div>
        </div>
    )
}

export default Search



// <InputTextBox placeholder='Enter some text here ...' />


// <InfiniteScroll pageStart={0} loadMore={this.loadItems.bind(this)} hasMore={this.state.hasMoreItems} loader={loader}>
// </InfiniteScroll>



                        //allData.map(({desc}) => (
                        //     <SearchCard key={id} id={id} projName={projName} projDesc={desc} stacks={stacks} projLinks={projLinks} />
                        // ))}
                        // {(loading || hasNextPage) && (
                        //     <ListItem ref={sentryRef}>
                        //     <Loading />
                        //     </ListItem>
                        // )