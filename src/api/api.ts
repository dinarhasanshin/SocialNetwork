import axios from "axios";
import {FriendsCollectionType} from "../types/types";


export const instance = axios.create
({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "edee3bdd-3755-424a-b6b2-1bac360abd69"
        }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesCaptchaUrlEnum {
    Captcha = 10
}

export type GetItemsType = {
    items: Array<FriendsCollectionType>,
    totalCount: number,
    error: string | null
}


export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC
}