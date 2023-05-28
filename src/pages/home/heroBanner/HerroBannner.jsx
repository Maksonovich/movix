import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';

import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper';

import useFetch from '../../../hooks/useFetch';

export const HerroBannner = () => {

    const navigate = useNavigate()
    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const { url } = useSelector((state) => state.home)

    const { data, loading } = useFetch("/movie/upcoming")

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path
        setBackground(bg)
    }, [data])

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className='heroBanner'>

            {!loading && <div className="backdrop-img">
                <img className='BannerImg' src={background} />
            </div>} 

            <div className='opacity-layer'>

            </div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Milions of movies, Tv shows and people
                        to discover.Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder='Search for a movie or tv show....'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>
                            Search
                        </button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}
