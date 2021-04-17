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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

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
    const [url, setUrl] = useState('https://hacko-backend-apis.herokuapp.com/fetchAll')
    const [nameList, setNameList] = useState([])
    const [searchList, setSearchList] = useState([])
    const [stackList, setStackList] = useState([])

    
    useEffect(() => {
        console.log('INSIDE USE EFFECT')
        axios.get(url)
        .then((res)=> {
            if(url.includes('fetchbyName')) setAllData([res.data])
            else setAllData(res.data.slice(0,20))
            console.log(res)
        })
        .catch((err) => console.log(err))


        axios.get('https://hacko-backend-apis.herokuapp.com/fetchAllNames')
        .then(res => setNameList(res.data))
        .catch(err =>  console.log(err))


        axios.get('https://hacko-backend-apis.herokuapp.com/fetchAllLabels')
        .then(res =>  setSearchList(res.data))
        .catch(err =>  console.log(err))


        axios.get('https://hacko-backend-apis.herokuapp.com/fetchStacks')
        .then(res => setStackList(res.data))
        .catch(err =>  console.log(err))

    }, [url])











    // SEARCH BAR : BASED ON NAME OF PROJECT

    const onSubmitProjNameChangeURL = (inpVal) => {
        if(inpVal==='ALL') setUrl(`https://hacko-backend-apis.herokuapp.com/fetchAll`)
        else setUrl(`https://hacko-backend-apis.herokuapp.com/fetchbyName/${inpVal}`)
    }

    const [searchVal, setSearchVal] = useState(nameList[0])
    const extractProjNameInpVal = (e, newVal) => {
        setSearchVal(newVal)
        onSubmitProjNameChangeURL(newVal)
    }









    // STACK SEARCH BAR : BASED ON STACKS

    const onSubmitStackChangeURL = (inpVal) => {
        console.log(inpVal)
        setUrl(`https://hacko-backend-apis.herokuapp.com/fetchStacksByName/${inpVal}`)
    }

    const [stackVal, setStackVal] = useState(stackList[0])
    const extractStackInpVal = (e, newVal) => {
        setStackVal(newVal)
        onSubmitStackChangeURL(newVal)
    }










    // RADIO BUTTONS : BASED ON ML FILTER

    const extractFilterValue = (e,newVal) => {
        console.log(e, newVal)
        var newURL
        searchList.forEach(({label, fetchUrl}) => {
            if(label===newVal) newURL = fetchUrl
        })
        setUrl(`https://hacko-backend-apis.herokuapp.com/${newURL}`)
    }



    return (
        <div className='container-fluid' style={{minHeight:'90vh'}}>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>

                <h1 style={{marginTop:'80px', marginBottom:'50px', textAlign:'center'}}>SEARCH ...</h1>


                    <Autocomplete
                        id="seacch proj names"
                        options={nameList}
                        getOptionLabel={(option) => option}
                        value={searchVal}
                        onChange={(e,newVal) => extractProjNameInpVal(e,newVal)}
                        className={classes.inputTextbox}
                        renderInput={(params) => <TextField {...params} label="Enter Project Name here ..." variant="outlined" />} />


                    
                    <Autocomplete
                        id="search stacks"
                        options={stackList}
                        getOptionLabel={(option) => option}
                        value={stackVal}
                        onChange={(e,newVal) => extractStackInpVal(e,newVal)}
                        className={classes.inputTextbox}
                        renderInput={(params) => <TextField {...params} label="Enter some stack here ..." variant="outlined" />} />



                    <FormControl component="fieldset" className={classes.inputTextbox}>
                    <FormLabel component="legend" style={{color:'#adbac7'}}>Filter Themes</FormLabel>
                    <RadioGroup row aria-label="position" name="position" onChange={(e,newVal) => extractFilterValue(e,newVal)} >
                        {searchList.map(({label}) => <FormControlLabel
                            value={label}
                            control={<Radio color="primary" classes={{root: classes.radio, checked: classes.checked}} />}
                            label={label}
                            labelPlacement="start" />)}
                    </RadioGroup>
                    </FormControl>

                    
                    <datalist id="browsers" className='search_datalist'>
                        {searchList.map(({label}) => <option className='search_datalist' value={label} />)}
                    </datalist>                    
                    
                    {allData ? 
                        allData.map(({name, desc, stacksUsed, githubLinks, devfolioLink}) => <SearchCard projName={name} projDesc={desc} stacks={stacksUsed} projLinks={githubLinks} devfolioLink={devfolioLink} />):
                        <div className="loader">Loading ...</div>
                    }

                    <div className='col-2'></div>
                </div>            
            </div>
        </div>
    )
}

export default Search