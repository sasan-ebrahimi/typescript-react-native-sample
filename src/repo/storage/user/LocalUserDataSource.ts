import {User} from "../../../services/user/ApiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CACHE_USERS_TIMESTAMP, USER_LIST} from "../AsyncStorageKeys";
import {deserialize, serialize} from "../../../utils/Serializer";
import {UserDataSourceInterface} from "../../UserDataSourceInterface";
import {isUserCacheValid} from "../../../b-logic/CachingExpiration";

class LocalUserDataSource implements UserDataSourceInterface {

    async saveUsers(users: User[]): Promise<void> {
        return AsyncStorage.setItem(USER_LIST, serialize(users))
    }

    async getUsers(): Promise<User[]> {
        return await AsyncStorage.getItem(USER_LIST).then(
            (value: string) => {
                return deserialize<User[]>(value)
            }
        )
    }

    async getUsersCachedTime(): Promise<number> {
        return await AsyncStorage.getItem(CACHE_USERS_TIMESTAMP).then(
            (value: string) => {
                return deserialize<number>(value)
            }
        )
    }

    async saveCachedTime(): Promise<void> {
        return AsyncStorage.setItem(CACHE_USERS_TIMESTAMP, serialize(Date.now()))
    }

    async shouldUseCache(forceCloudFetch: boolean): Promise<boolean> {
        let cachedTime = await this.getUsersCachedTime()
        return (cachedTime != null && isUserCacheValid(cachedTime) && !forceCloudFetch)
    }
}

export {LocalUserDataSource}
