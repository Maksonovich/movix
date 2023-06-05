import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from '../../components/card/Card';
import './style.scss';
import { ContentWrapper } from '../../components/contentWrapper/ContentWrapper';

export const Favorite = () => {

    const [movie, setMovie] = useState([]);

    const fetchDataFromApi = async () => {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=naruto&sfw`)
        const data = response.data
        setMovie(data.data);
    }

    useEffect(() => {
        fetchDataFromApi();
    }, [])

    return (
        <ContentWrapper>
            <div className='cards'>
                {movie?.map((el) => {
                    return (
                        <Card key={el.mal_id} all={el} />
                    )
                })}
            </div>
        </ContentWrapper>
    )
}
