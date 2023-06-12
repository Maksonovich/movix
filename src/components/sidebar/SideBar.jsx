import React from 'react'
import { Img } from '../lazyloadimage/Img'

export const SideBar = ({ data }) => {
    return (
        <div>
            <aside>
                {data.map((item, index) => {
                    return (
                        <div className='animeCard' key={index.mal_id}>
                            <Img src={item}/>
                        </div>
                    )
                })}
            </aside>
        </div>
    )
}
