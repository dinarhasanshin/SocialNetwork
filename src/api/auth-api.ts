import {instance, APIResponseType} from "./api";



type MeResponseDataType = {
    id: number,
    email: string,
    login: string
}
type LoginResponseDataType = {
    userId: number
}


export const authAPI = {
    getAuth: () => {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(response => response.data);
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<APIResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    logout: () => {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}