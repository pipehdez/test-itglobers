import React from 'react';
import './Menu.scss';

export const Menu = ({items = [], setCurrentItem, current}) => {
    return (
        <div id='header-homepage'>
            <ul >
                {items.map((item) => {
                    return (<li key={item.id} onClick={()=>setCurrentItem(item)}>{item.name}</li>)
                })}
            </ul>
        </div>
    );
}
