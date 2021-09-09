import {UserSortType} from "../enums/UserSortType";
import {User} from "../services/user/ApiClient";

function sortUsers(sortType: UserSortType, users: User[]): User[] {
    switch (sortType) {
        case UserSortType.NAME:
            return users.sort((a, b) => {
                return compare<string>(a.name, b.name)
            })

        case UserSortType.AGE:
            return users.sort((a, b) => {
                return compare<number>(a.age, b.age)
            })
        default:
            return users
    }

}

function compare<T>(a: T, b: T): number {
    if (a > b)
        return 1
    if (a < b)
        return -1
    return 0
}

export {sortUsers}
