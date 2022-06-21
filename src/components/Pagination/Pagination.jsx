import "./Pagination.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pagination = ({numberOfPages}) => {
    const {pageNumber} = useParams();

    const [paginationButtons, setPaginationButtons] = useState([]);

    useEffect(function(){
        const paginationElements = [];
        for(let i = 0; i < numberOfPages; i++) {
            if(pageNumber == i+1){
                paginationElements.push({page:i+1, isActive: true});
            } else {
                paginationElements.push({page:i+1, isActive: false});
            }
             
        }
        setPaginationButtons(paginationElements);
    }, [numberOfPages])

    useEffect(function(){
        const paginationElements = paginationButtons.map(function(item){
            if(item.page == pageNumber) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
            return item;
        })
        setPaginationButtons(paginationElements);
    }, [pageNumber])

    return (
        <div className="pagination">
            {paginationButtons.map(function(item){
                return (
                    <Link 
                        key={item.page}
                        className = {item.isActive ? "pagination__button pagination__button-active" : "pagination__button"}  
                        to={`/page-${item.page}`}>{item.page}
                    </Link>
                )
            })}
        </div>
    )
}

export default Pagination;