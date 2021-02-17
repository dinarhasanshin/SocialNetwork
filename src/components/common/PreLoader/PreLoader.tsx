import React from 'react';
// @ts-ignore
import s from "./PreLoader.module.css";

const PreLoader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.ldsCircle}>
                <div></div>
            </div>
        </div>
    );
};

export default PreLoader;

export const PreLoaderApp = () => {
    return (
        <div className={s.preloaderApp}>
            <div className={s.ldsCircle}>
                <div></div>
            </div>
        </div>
    );
};