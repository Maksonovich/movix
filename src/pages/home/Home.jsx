import React from 'react';
import './style.scss';

import HeroBanner from './heroBanner/HerroBanner';
import { Trending } from './trending/Trending';
import { Popular } from './popular/Popular';
import { TopRated } from './topRated/TopRated';

export const Home = () => {
    return (
        <div className='homepage'>
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    )
}
