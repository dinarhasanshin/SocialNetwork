import * as axios from "axios";


const instance = axios.create
({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "edee3bdd-3755-424a-b6b2-1bac360abd69"
        }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow: (userId) => {
        return instance.post(`follow/` + userId).then(response => response.data);
    },
    unFollow: (userId) => {
        return instance.delete(`follow/` + userId).then(response => response.data);
    },
    getProfile: (userId) => {
        console.warn("Obsolete method. Please use profileAPI object!");
        return profileAPI.getProfile(userId);
    }
}

export const  profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/` + userId).then(response => response.data);
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/` + userId).then(response => response.data);
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, { status: status }).then(response => response.data);
    },
    savePhoto: (photoFile) => {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    saveProfile: (profile) => {
        return instance.put(`profile`, profile).then(response => response.data);
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login: (email, password, rememberMe = false) => {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data);
    },
    logout: () => {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}


