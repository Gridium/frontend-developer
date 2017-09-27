import React from 'react';

const ListItem = ({ style, name, value }) => {
    return (
        <li className={style}>
            {name}: {value}
        </li>
    );
};

export default ListItem;