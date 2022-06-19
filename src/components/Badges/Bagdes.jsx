import "./Badges.scss";

import Badge from "../Badge/Badge";

const Badges = ({badgesArray}) => {

    return(
        <div className="badges">
            {badgesArray.map(item=>{
                return (
                    <Badge 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        price={item.price} 
                        key={"132"+item.name}
                    />
                )
            })}
        </div>
    )
}

export default Badges;