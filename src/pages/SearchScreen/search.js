import React from 'react'
import Navbar from "../../components/Navbar"
import SearchPage from "./SearchPage"
function search({searchTerm,googleData}){
    return(
        <>
        <Navbar />
        <SearchPage searchTerm={searchTerm} googleData={googleData}/>
        </>
    )
}
export default search