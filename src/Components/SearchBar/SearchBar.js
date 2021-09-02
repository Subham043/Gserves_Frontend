import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"
import { showServiceModal } from "../../features/serviceModalSlice"
import { useDispatch } from "react-redux"
import {useHistory} from 'react-router-dom'

const SearchBar = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [showSuggestion, setShowSuggestion] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [subNavServices, setSubNavServices] = useState([
        {id:1, name:"AADHAR - Change Name",service_id:1},
        {id:2, name:"AADHAR - Change Phone",service_id:1},
        {id:3, name:"AADHAR - Change Address",service_id:1},
        {id:4, name:"BBMP - Change Name",service_id:2},
        {id:5, name:"BBMP - Change Phone",service_id:2},
        {id:6, name:"BBMP - Change Address",service_id:2},
        {id:7, name:"PASSPORT - Change Name",service_id:3},
        {id:8, name:"PASSPORT - Change Phone",service_id:3},
        {id:9, name:"PASSPORT - Change Address",service_id:3},
        {id:10, name:"BESCOM - Change Name",service_id:4},
        {id:11, name:"BESCOM - Change Phone",service_id:4},
        {id:12, name:"BESCOM - Change Address",service_id:4},
        {id:13, name:"TRANSPORT - Change Name",service_id:5},
        {id:14, name:"TRANSPORT - Change Phone",service_id:5},
        {id:15, name:"TRANSPORT - Change Address",service_id:5},
    ]);


    const showServiceNotListShowHandler = () => {
        dispatch(showServiceModal())
        setShowSuggestion(false)
    }


    const suggestionHandler = (e) => {
        setSearchInput(e.target.value);
        e.target.value.length === 0 ? setShowSuggestion(false) : setShowSuggestion(true);
    }

    const suggestionClickHandler = (value) => {
        setSearchInput(value)
        setShowSuggestion(false)
    }

    const clickHandler = () => {
        history.push(`/service`)
    }

    return (
        <div style={{ position: "relative" }}>
            <div className="search__input__div">
                <input type="search" className="search__input shadow__bottom" placeholder="Type the service you are looking for" onChange={suggestionHandler} value={searchInput} />
                <button onClick={clickHandler} className="seacrh__btn"><FaSearch /></button>
            </div>
            {showSuggestion ? <div className="suggestion__div_container">


                {subNavServices.map((item) => {
                    if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
                        return (
                            <div className="suggestion__div" key={item.id} onClick={() => suggestionClickHandler(item.name)}>
                                <p>{item.name}</p>
                            </div>
                        );
                    }else{
                        return (null);
                    }

                })}

                <div onClick={showServiceNotListShowHandler} className="suggestion__div" style={{ background: "#eee", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", }}>
                    <p>My service not listed</p>
                </div>


            </div> : null}
           

            
        </div>

    )
}

export default SearchBar
