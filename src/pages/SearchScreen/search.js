import React from 'react'
import Navbar from "../../components/Navbar"
import SearchPage from "./SearchPage"
function search({searchTerm}){
    return(
        <>
        <Navbar />
        <SearchPage searchTerm={searchTerm}/>
        </>
    )
}
export default search