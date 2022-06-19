import "./Filter.scss";

import { useSelector, useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import { useState } from "react";

import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const Filter = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const badges = useSelector(state=>state.badges.badges);
    const materialFilters = useSelector(state => state.filter.materialFilters);
    const typeFilters = useSelector(state => state.filter.typeFilters);

    function checkFilters() {

        let newList = [...badges];

        if(materialFilters.length != 0) {
            newList = newList.filter(function(item){
                if(materialFilters.includes(item.material)) {
                    return item;
                }
            })
        }

        if(typeFilters.length != 0) {
            newList = newList.filter(function(item){
                if(typeFilters.includes(item.typeFastening)) {
                    return item;
                }
            });
        }

        dispatch({type:"FILTER_BADGES_INIT", payload: newList});
        navigate("/page-1");
    }

    return (
        <div className="filter">
            <div className="filter__category">
                <div className="filter__title">Тип крепления:</div>
                <CustomCheckbox text="Булавка" fastening={"Булавка"}/>
                <CustomCheckbox text="Застёжка" fastening={"Застёжка"}/>
            </div>

            <div className="filter__category">
                <div className="filter__title">Материал:</div>
                <CustomCheckbox text="Металл" material={"Металл"}/>
                <CustomCheckbox text="Дерево" material={"Дерево"}/>
                <CustomCheckbox text="Пластик" material={"Пластик"}/>
            </div>

            <div className="filter__button" onClick={checkFilters}>Применить фильтры</div>
        </div>
    )
}

export default Filter;