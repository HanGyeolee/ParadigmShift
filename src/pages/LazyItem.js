import React, {lazy, Suspense} from 'react';
import {ReactComponent as Loading} from '../svg/cycle.svg';

export interface Iprops {
    src: string,
    name: string,
}

const LazyImage = lazy(() => import('./LazyImage'));

const LazyItem = ({src, name}: Iprops) => {
    return (
        <div>
            <Suspense fallback={<Loading className="turninganimation"></Loading>}>
                <LazyImage src={src} name={name}/>
            </Suspense>
        </div>
    )
}

export default LazyItem;