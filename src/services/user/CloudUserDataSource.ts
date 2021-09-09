import {ApiClient, User} from "./ApiClient";
import {UserDataSourceInterface} from "../../repo/UserDataSourceInterface";

class CloudUserDataSource implements UserDataSourceInterface{
    getUsers(): Promise<User[]> {
        return ApiClient.fetchUsers()
    }
}

export {CloudUserDataSource}
