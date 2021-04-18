import React from "react";
import './styles.scss'

type BtnProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const AddButton: React.FC<BtnProps> = ( props: BtnProps ) => {
    return (
        <button className={'add-button'} onClick={ props.onClick || ( () => {} ) }>
            +
        </button>
    )
}

export default AddButton;