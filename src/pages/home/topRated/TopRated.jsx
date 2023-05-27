import React, { useState } from 'react'
import './style.scss'
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper'
import { SwitchTabs } from '../../../components/switchTabs/SwitchTabs'
import useFetch from './../../../hooks/useFetch';
import { Carousel } from '../../../components/carousel/Carousel';

export const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie")

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>
                    Top Rated
                </span>
                <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    )
}
