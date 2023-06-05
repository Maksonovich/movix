import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../../Favorite/style.scss';
import { ContentWrapper } from "../../../components/contentWrapper/ContentWrapper";

export const CardDetails = () => {
    const [movie, setMovie] = useState([]);

    const { id } = useParams();

    const fetch = async () => {
        const data = await axios.get(
            `https://api.jikan.moe/v4/anime?q=${id}&limit=1`
        );
        setMovie(data.data.data);
    };

    useEffect(() => {
        fetch();
    }, []);

    console.log(movie);

    return (
        <ContentWrapper>
            <div className='cardes'>
                {movie.map(all => (
                    <div className='cardess' key={all.mal_id}>
                        <div className='cardes_img'>
                            <img src={all.images.jpg.large_image_url} alt='' />
                        </div>
                        <h1>{all.title}</h1>
                        <p>{all.synopsis}</p>
                    </div>
                ))}
            </div>
        </ContentWrapper>
    );
};