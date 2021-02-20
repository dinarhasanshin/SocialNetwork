import {instance} from "./api";

type CaptchaUrlType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get<CaptchaUrlType>(`security/get-captcha-url`).then(response => response.data);
    },
}