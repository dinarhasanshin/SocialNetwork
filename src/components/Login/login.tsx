import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {authLogin} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
// @ts-ignore
import s from './login.module.css';
import {AppStateType} from "../../redux/redux-store";


let maxLength30 = maxLengthCreator(30);

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({handleSubmit, error}) => {
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


                {/*                {
                    error !== null && <div className={s.loginFormError}>{error}</div>
                }*/}
                <div className={s.login_button}>
                    <button>Sign in</button>
                </div>
            </form>
        </div>

    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType>({ form: 'login' })(LoginForm)

type MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    authLogin: (email: string, password: string, rememberMe: boolean) => void
}

export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.authLogin(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div className={s.login_page}>

        <LoginReduxForm onSubmit={ onSubmit }/>
    </div>

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { authLogin })(login);