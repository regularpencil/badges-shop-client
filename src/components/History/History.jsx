import "./History.scss";

import { useSelector } from "react-redux";

import Badge from "../Badge/Badge";

const History = () => {


    const historyList = useSelector(state => state.history.historyBadges);

    return (
        <div className="history">
            {historyList.map(function(item){
                return(
                    <Badge id={item.id} name={item.name} image={item.image} price={item.price} isFavorite={item.isFavorite} key={"111"+item.id}/>
                )
            })}
        </div>
    )
}

export default History;