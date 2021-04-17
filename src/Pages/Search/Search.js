import {useEffect, useState} from 'react'
import {SearchCard} from '../../Components'
import './search.scss'

// MATERIAL UI
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

// AXIOS
import axios from 'axios'






const useStyles = makeStyles({
    inputTextbox: {
        display: 'block',
        padding: '2',
        width: '600',
        border: '1 solid #3F3D56',
        borderRadius: '21',
        marginBottom: '2em',
        marginTop: '2em'
    }
})





const Search = () => {

    const classes = useStyles()
    
    const [allData, setAllData] = useState([])
    const [url, setUrl] = useState('https://hackobackendapis.herokuapp.com/fetchAll')

    
    useEffect(() => {
        console.log('INSIDE USE EFFECT')
        axios.get(url)
        .then((res)=> {
            if(url.includes('fetchbyName')) setAllData([res.data])
            else setAllData(res.data.slice(0,20))
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [url])











    // SEARCH BAR : BASED ON NAME OF PROJECT

    const nameList = [
        'ALL',
        'DONTRACK',
        'AnonyMate',
        'Peer IO',
        'MediFast',
        'Ularn'
    ]

    const onSubmitChangeURL = (inpVal) => {
        var searchThis
        nameList.forEach(projName => {
            if(projName===inpVal) searchThis = projName
        })
        if(searchThis==='ALL') setUrl(`https://hackobackendapis.herokuapp.com/fetchAll`)
        else setUrl(`https://hackobackendapis.herokuapp.com/fetchbyName/${searchThis}`)
    }

    const [searchVal, setSearchVal] = useState(nameList[0])
    const extractInpVal = (e, newVal) => {
        setSearchVal(newVal)
        onSubmitChangeURL(newVal)
    }










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

    const [filterVal, setFilterVal] = useState(searchList[0].label)

    const extractFilterValue = (e,newVal) => {
        console.log(e, newVal)
        var newURL
        searchList.forEach(({label, fetchUrl}) => {
            if(label===newVal) newURL = fetchUrl
        })
        setUrl(`https://hackobackendapis.herokuapp.com/${newURL}`)
    }



    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>


                    <Autocomplete
                        id="controllable-states-demo"
                        options={nameList}
                        getOptionLabel={(option) => option}
                        value={searchVal}
                        onChange={(e,newVal) => extractInpVal(e,newVal)}
                        className={classes.inputTextbox}
                        renderInput={(params) => <TextField {...params} label="Enter some text here ..." variant="outlined" />} />



                    <FormControl component="fieldset" className={classes.inputTextbox}>
                    <FormLabel component="legend">Filter Options</FormLabel>
                    <RadioGroup row aria-label="position" name="position" onChange={(e,newVal) => extractFilterValue(e,newVal)} >
                        <FormControlLabel
                            value="technology"
                            control={<Radio color="primary" />}
                            label="technology"
                            labelPlacement="start" />
                        <FormControlLabel
                            value="science and research"
                            control={<Radio color="primary" />}
                            label="science and research"
                            labelPlacement="start" />
                        <FormControlLabel
                            value="miscellaneous"
                            control={<Radio color="primary" />}
                            label="miscellaneous"
                            labelPlacement="start" />
                        <FormControlLabel 
                            value="education" 
                            control={<Radio color="primary" />} 
                            label="education" 
                            labelPlacement="start" />
                    </RadioGroup>
                    </FormControl>

                    
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






// <Autocomplete
// multiple filterSelectedOptions id="tags-outlined"
// options={searchList}
// getOptionLabel={(option) => option.label}
// defaultValue={[searchList[0]]}
// onChange={(e,newVal) => extractFilterValue(e,newVal)}                        
// className={classes.inputTextbox}
// renderInput={(params) => (
//     <TextField
//         {...params}
//         variant="outlined"
//         label="Filter Options"
//         placeholder="Select a filter"
//     />
// )}
// />






// const dbVals = [
//     {id: 0, projName:'PROJ NAME 1', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['#', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'},
//     {id: 1, projName:'PROJ NAME 2', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['#', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'},
//     {id: 2, projName:'PROJ NAME 3', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['#', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'},
//     {id: 3, projName:'PROJ NAME 4', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['#', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'},
//     {id: 4, projName:'PROJ NAME 5', projDesc:'lorem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm', stacks:['NODE JS', 'MongoDB', 'ReactJS'], projLinks:['https://github.com/shivamanand1/Gr', '#', '#'], inDesc:'em t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgem t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cgm t desctisdjlfimgknud,khfgn sdkfjcfhnmsh gkdshgckmd,fgn dkjhgkd gdfkg dkhgkdfh kcd gkhd,cg'}
// ]