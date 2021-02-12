import React from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from 'redux-form/lib/Field';
// @ts-ignore
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

type FormsControlParams = {
    meta: WrappedFieldMetaProps,
    input: WrappedFieldInputProps
}
type FormControlType = (params: FormsControlParams) => React.ReactNode


export const Input: FormControlType = ({input, meta: {touched, error}, ...props}) => {

    const hasError: WrappedFieldMetaProps = touched && error;

    return (
        <div className={(hasError ? s.error : "") + " " + (hasError ? s.warn : "")}>
            <input {...input} {...props} />
            { hasError && <div> <span>{ error }</span> </div>   }
        </div>
    );
};
