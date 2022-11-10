import React,{useEffect} from "react"
import {useHistory} from "react-router-dom"

const SearchScreen = ({searchTerm}) => {
    const history=useHistory('');
    
    useEffect(()=>{
        if(searchTerm===''){
            history.push("/home");
            
        }
        //eslint-disable-next-line
    },[searchTerm])
    
    return (
        <div>
            <h1>Welcome to Search Screen :{searchTerm}</h1>    
        </div>
    )
}
export default SearchScreen