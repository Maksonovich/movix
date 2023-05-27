import React from 'react'
import './style.scss'

import { HerroBannner } from './heroBanner/HerroBannner'
import { Trending } from './trending/Trending'
import { Popular } from './popular/Popular'
import { TopRated } from './topRated/TopRated'
HerroBannner

export const Home = () => {
    return (
        <div className='homepage'>
            <HerroBannner />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    )
}
