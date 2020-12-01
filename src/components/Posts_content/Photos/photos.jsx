import React from 'react';
import Photo from './Photo/photo';
import s from "./photos.module.css";

const photos = () =>{
    return(
        <div className={s.photo_collection}>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
        </div>
    )
}
export default photos;