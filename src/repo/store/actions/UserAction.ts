import {User} from "../../../services/user/ApiClient";
import {GET_USERS, SET_USER_SORT_TYPE} from "./types";
import {UserSortType} from "../../../enums/UserSortType";
import {sortUsers} from "../../../utils/UserUtil";
import {isUserCacheValid} from "../../../b-logic/CachingExpiration";
import {LocalUserDataSource} from "../../storage/user/LocalUserDataSource";
import {CloudUserDataSource} from "../../../services/user/CloudUserDataSource";

export const getUsers = (sortType: UserSortType = UserSortType.NAME, forceCloudFetch: boolean = false) => {
    let localDataSource = new LocalUserDataSource()
    let cloudDataSource = new CloudUserDataSource()
    return async (dispatch) => {
        dispatch({type: GET_USERS.LOADING})
        try {
            let users: User[]
            if (await localDataSource.shouldUseCache(forceCloudFetch))
                users = await localDataSource.getUsers()
            else {
                users = await cloudDataSource.getUsers()
                await sleepRandom(800,1800)
                await cacheUsers(users, localDataSource)
            }
            dispatch({type: GET_USERS.SUCCESS, payload: {usersList: sortUsers(sortType, users)}})
        } catch (error) {
            dispatch({type: GET_USERS.ERROR, payload: {error: error.toString()}})
        }
    };
};



async function cacheUsers(users: User[], localDataSource: LocalUserDataSource) {
    await localDataSource.saveUsers(users)
    await localDataSource.saveCachedTime()
}

export const setSortType = (sortType: UserSortType) => {
    return (dispatch) => {
        dispatch({type: SET_USER_SORT_TYPE, payload: {sortType: sortType}})
        dispatch(getUsers(sortType))
    };
}

export const refreshUserList = () => {
    return (dispatch, getState) => {
        dispatch(getUsers(getState().user.sortType, true))
    };
}

export const sleepRandom = async (from:number,to:number) =>{
    let simulatedDelay = Math.floor((Math.random() * to) + from);
    await sleep(simulatedDelay)
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

