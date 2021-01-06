import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {authLogin} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import s from './login.module.css';


let maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field component={Input} name={"email"}
                       placeholder={"Email"} validate={ [required, maxLength30] }/>
            </div>
            <div>
                <Field component={Input} name={"password"}
                       placeholder={"Password"} type={"password"} validate={ [required, maxLength30] }/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"}
                       type="checkbox" /> remember me
            </div>
            {
                props.error !== null && <div className={s.loginFormError}>{ props.error }</div>
            }
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const login = (props) => {

    const onSubmit = (formData) => {
        props.authLogin(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit }/>
    </div>

}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { authLogin })(login);