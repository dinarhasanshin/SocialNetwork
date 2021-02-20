import React from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { authLogin } from "../../redux/auth_reducer";
import { Redirect } from "react-router-dom";
// @ts-ignore
import s from './login.module.css';
import { AppStateType } from "../../redux/redux-store";
import { Input } from '../common/FormsControl/FormsControl';



type OwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, OwnPropsType> & OwnPropsType> =
    ({handleSubmit, error, captchaUrl}) => {
    return (
        <div className={s.login_container_form + " " + s.content_block_size}>
            <div className={s.header_login_form}>
                <p className={s.header_logo}>
                    CF
                </p>
                <h2>CubeFace</h2>
            </div>


            <form onSubmit={handleSubmit} className={s.login_form}>
                <Field component={Input} name={"email"}
                       placeholder={"Логин: free@samuraijs.com"}/>
                <Field component={Input} name={"password"}
                       placeholder={"Пароль: free"} type={"password"}/>

                <div className={s.login_checkbox_input}>
                    <Field  component={Input} name={"rememberMe"}
                           type="checkbox"/> remember me
                </div>

                {
                    captchaUrl && <img src={captchaUrl} alt=""/>
                }

                {
                    captchaUrl && <Field component={Input} name={"captcha"}
                                         placeholder={"Введите код с картинки"}/>
                }

                {
                    error !== undefined &&<div className={s.loginFormError}>{error}</div>
                }
                <div className={s.login_button}>
                    <button>Sign in</button>
                </div>
            </form>
        </div>

    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, OwnPropsType>({ form: 'login' })(LoginForm)

type MapStatePropsType = {
    isAuth: boolean,
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    authLogin: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

const login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.authLogin(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div className={s.login_page}>

        <LoginReduxForm onSubmit={ onSubmit } captchaUrl={ props.captchaUrl }/>
    </div>

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}


export default connect(mapStateToProps, { authLogin })(login);