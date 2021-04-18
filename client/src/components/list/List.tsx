/**
* Компонент является представлением списка готовых ответов на запросы.
* */

import React from "react";
import './styles.scss'

import AddButton from "../addButton/AddButton";

import { IListRecord } from './type'
import Tile from "../tile/Tile";

type ListProps = {
    data: IListRecord[]
}

const List: React.FC<ListProps> = function ( props: ListProps ) {
    return (
        <div className={'list'}>
            <div className={'list-header'}>
                <AddButton/>
            </div>
            <div className={'list-content'}>
                { props.data.map( item => <Tile name={ item.name } id={ item.id } /> ) }
            </div>

        </div>
    )
}

export default List;