import React from 'react';
import { Iprops } from './LazyItem'

const LazyImage = ({src, name} : Iprops) => {
    return (
        <img src={src} alt={name}/>
    );
};

export default LazyImage