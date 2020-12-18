import * as axios from "axios";


const instance = axios.create
({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "edee3bdd-3755-424a-b6b2-1bac360abd69"
        }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow: (userId) => {
        return instance.post(`follow/` + userId).then(response => response.data);
    },
    unFollow: (userId) => {
        return instance.delete(`follow/` + userId).then(response => response.data);
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`).then(response => response.data)
    }
}


