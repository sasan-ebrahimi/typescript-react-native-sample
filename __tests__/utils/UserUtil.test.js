import {sortUsers} from "../../src/utils/UserUtil";
import {UserSortType} from "../../src/enums/UserSortType";

describe('sortUsers', () => {
    let users = [
        {name: "Nick", age: 34},
        {name: "Philip", age: 22},
        {name: "Anna", age: 24}
    ]
    it('sort by name', () => {
        let expectation = [
            {name: "Anna", age: 24},
            {name: "Nick", age: 34},
            {name: "Philip", age: 22},
        ]
        let result = sortUsers(UserSortType.NAME, users)
        expect(result).toEqual(expectation)
    })
    it('sort by age', () => {
        let expectation = [
            {name: "Philip", age: 22},
            {name: "Anna", age: 24},
            {name: "Nick", age: 34},
        ]
        let result = sortUsers(UserSortType.AGE, users)
        expect(result).toEqual(expectation)
    })
})
