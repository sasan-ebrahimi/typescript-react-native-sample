import {isUserCacheValid, USER_CACHE_EXPIRE_TIME} from "../../src/b-logic/CachingExpiration";

describe('isUserCacheValid', () => {

    it('Should return false', () => {
        let result = isUserCacheValid(Date.now() - USER_CACHE_EXPIRE_TIME - 1)
        expect(result).toEqual(false)
    });
    it('Should return true', () => {
        let result = isUserCacheValid(Date.now() - USER_CACHE_EXPIRE_TIME + 1)
        expect(result).toEqual(true)
    });

});

