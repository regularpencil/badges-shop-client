import "./History.scss";

import { useSelector } from "react-redux";

import Badge from "../Badge/Badge";

const History = () => {


    const historyList = useSelector(state => state.history.historyBadges);

    return (
        <div className="history">
            {
            historyList.length > 0
            ?
            historyList.map(function(item){
                return(
                    <Badge id={item.id} name={item.name} image={item.image} price={item.price} isFavorite={item.isFavorite} key={Math.random()}/>
                )
            })
            :
            <h1>Пока здесь пусто...</h1>
            }
        </div>
    )
}

export default History;