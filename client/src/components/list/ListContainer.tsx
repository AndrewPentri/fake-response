import React from "react";
import { observer } from "mobx-react-lite";

import List from "./List";
import ListStore from "./store/ListStore";

const ListContainer: React.FC = observer( () => {
    return (
        <div style={ { height: '100%' } }>
            <List data={ ListStore.records } />
        </div>
    )
})

export default ListContainer;
