import {GET_USERS, SET_USER_SORT_TYPE} from "../actions/types";
import {UserSortType} from "../../../enums/UserSortType";
import {User} from "../../../services/user/ApiClient";

export interface UserReducerInterface {
    usersList: User[],
    isLoading: boolean,
    sortType: UserSortType,
    error: string
}

const initialState: UserReducerInterface = {
    usersList: [],
    isLoading: false,
    sortType: UserSortType.NAME,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_USERS.SUCCESS:
            return {
                ...state,
                usersList: action.payload.usersList,
                isLoading: false
            }

        case GET_USERS.LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case GET_USERS.ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }

        case SET_USER_SORT_TYPE:
            return {
                ...state,
                sortType: action.payload.sortType
            }
        default:
            return state
    }
};
