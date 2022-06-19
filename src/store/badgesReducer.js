
import lamp from "../images/lamp.jpg";
import lighter from "../images/lighter.jpg";
import heart from "../images/heart.jpg";
import silence from "../images/silence.jpg";
import chocolate from "../images/chocolate.jpg";
import calendar from "../images/calendar.jpg";
import sandClock from "../images/sand-clock.jpg";
import ship from "../images/ship.jpg";

const defaultState = {
    badges: [
        {id: 1, name:"ЛаМпА", image: lamp, price: 290, typeFastening: "Булавка", material: "Дерево", description:"Предмет, освещающий скрытый тьмою путь и придающий приятное жжение внутри",},
        {id: 2, name:"Зажигавка", image: lighter, price: 320, typeFastening: "Застёжка",material: "Дерево", description:"Детям спички не игрушка, но насчёт зажигалки слов не было",},
        {id: 3, name:"Слушай тишину", image: silence, price: 399, typeFastening: "Застёжка",material: "Металл", description:"Кит, везущий на себе горы как символ спокойствия и умиротворения, ярких и приятных цветов. Перевод с английского \"Слушай тишину\"."},
        {id: 4, name:"Горячий шоколад", image: chocolate, price: 270, typeFastening: "Булавка",material: "Дерево", description:"Атмосферный зимний значок в виде кружке горячего шоколада с маршмеллоу."},
        {id: 5, name:"Календарь ацтеков", image: calendar, price: 320, typeFastening: "Застёжка", material: "Металл", description:"Символ далёких путешествий со словами Love и Travel: любовь и путешествие, как две самые важные составляющие жизни.",},
        {id: 6, name:"Песочные часы", image: sandClock, price: 300, typeFastening: "Застёжка", material: "Металл", description:"Время бежит быстро, остаётся только ловить момент и получать кайф от того, что происходит. Важное напоминание в виде песочных часов со словом Сейчас.",},
        {id: 7, name:"Сердсэ", image: heart,price: 250, typeFastening: "Булавка",material: "Пластик", description:"Главный символ любви и чувств в нестандартном виде. Также отлично подойдёт представителям медицинских профессий."},
        {id: 8, name:"Парусник", image: ship, price: 350, typeFastening: "Застёжка", material: "Металл", description:"Парусник как напоминание о морском бризе и звуке морских волн."},
    ],
}

export const badgesReducer = (state=defaultState, {type, payload}) => {
    
    switch(type) {
        case"BADGES_SET":
            return {...state, badges: payload};
        default:
            return state;
    }
} 