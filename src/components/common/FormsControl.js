import React from 'react';
import s from './FormsControl.module.css';

/*export const InputArea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={(hasError ? s.error : "") + " " + (hasError ? s.warn : "")}>
            <input {...input} {...props} />
            { hasError &&  <span>{ meta.error }</span> }
        </div>
    );
};*/

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={(hasError ? s.error : "") + " " + (hasError ? s.warn : "")}>
            <input {...input} {...props} />
            { hasError && <div> <span>{ meta.error }</span> </div>   }
        </div>
    );
};
