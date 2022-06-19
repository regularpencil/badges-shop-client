import "./Main.scss";

import Filter from "../Filter/Filter";
import Badges from "../Badges/Bagdes";
import Searcher from "../Searcher/Searcher";
import Pagination from "../Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

const Main = () => {
    const {pageNumber} = useParams();
    const [badgesForPage, setBadgesForPage] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(0); 
    const badgesPerPage = 3;

    const dispatch = useDispatch();

    const searchedBadges = useSelector(state=>state.search.searchedBadges);
    useEffect(function(){
        const firstBadgeIndex = ((pageNumber-1)*badgesPerPage);
        const newList = searchedBadges.slice(firstBadgeIndex, firstBadgeIndex+badgesPerPage);
        setBadgesForPage(newList);
        setNumberOfPages(Math.ceil(searchedBadges.length/badgesPerPage));
    }, [searchedBadges, pageNumber]);

    useEffect(function(){
        dispatch({type:"CLEAR_FILTERS"});
    },[])

    return (
        <div className="main-page">
            <Filter></Filter>
            <div className="main-page__right">
                <Searcher/>
                <Badges badgesArray={badgesForPage}/>
                <Pagination numberOfPages={numberOfPages}/>
            </div>
        </div>
    )
}

export default Main;