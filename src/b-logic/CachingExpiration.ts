const USER_CACHE_EXPIRE_TIME = 1000 * 60 * 60

interface IsCacheValidInterface {
    (time: number): boolean
}

const isUserCacheValid: IsCacheValidInterface = function (cachedTimeStamp: number): boolean {
    return Date.now() - cachedTimeStamp < USER_CACHE_EXPIRE_TIME
}

export {isUserCacheValid,USER_CACHE_EXPIRE_TIME}
