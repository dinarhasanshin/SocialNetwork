import {GetItemsType, instance} from "./api";
import {APIResponseType} from "./api";

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10, term: string = "", isFriends: boolean | null = null) => {
        return instance.get<GetItemsType>
        (`users?page=${currentPage}&count=${pageSize}&term=${term}` + (isFriends === null ? "" : `&friend=${isFriends}`)).then(response => response.data);
    },
    follow: (userId: number) => {
        return instance.post(`follow/` + userId).then(response => response.data);
    },
    unFollow: (userId: number) => {
        return instance.delete(`follow/` + userId).then(response => response.data) as Promise<APIResponseType>;
    }
}