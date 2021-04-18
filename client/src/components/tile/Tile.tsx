/**
* Компонент является представлением в виде "Плитке".
* */

import React from "react";
import './styles.scss'

type TileProps = {
    name: string,
    id?: number
}

const Tile: React.FC<TileProps> = ( props: TileProps ) => {
    return (
        <div className={'tile'}>
            <div className={'tile-container'}>
                <div className={'tile-content'}>
                    <span className={'tile-text'}> { props.name } </span>
                </div>
            </div>
        </div>

    )
}

export default Tile;
