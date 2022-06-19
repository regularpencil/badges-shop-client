import "./CustomCheckbox.scss";

import {useDispatch} from "react-redux";

const CustomCheckbox = ({text, material, fastening}) => {

    const dispatch = useDispatch();

    function changeHandler(e) {
        const checked = e.target.checked;
        if(checked) {
            if(material !== undefined){
                dispatch({type:"ADD_MATERIAL_FILTER", payload: material});
            } else if(fastening !== undefined) {
                dispatch({type:"ADD_TYPE_FILTER", payload: fastening});
            }
            
        } else {
            if(material !== undefined){
                dispatch({type:"REMOVE_MATERIAL_FILTER", payload: material});
            } else if(fastening !== undefined){
                dispatch({type:"REMOVE_TYPE_FILTER", payload: fastening});
            }
        }
    }

    return(
        <label className="checkbox">
                <input type="checkbox" className="checkbox__hidden" onChange={changeHandler}/>
                <span className="checkbox__show"></span>
                {text}
        </label>
    )
}

export default CustomCheckbox;