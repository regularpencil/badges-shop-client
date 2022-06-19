import "./OrderGoods.scss";

const OrderGoods = ({goods}) => {
    return (
        <div className="order-goods">
            {
                goods.map(function(element){
                    return  <div className="order-goods__item" key={Math.random()}>
                        <img src={element.image} alt="" className="order-goods__image" />
                        <div className="order-goods__information">
                            <div className="order-goods__name">{element.name}</div>
                            <div className="order-goods__price">{element.price} &#8381;</div>
                            <div className="order-goods__count">{element.count}шт.</div>
                        </div>
                    </div>
                })
            } 
        </div>
    )
}

export default OrderGoods;