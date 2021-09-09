import {User} from "../services/user/ApiClient";

interface UserDataSourceInterface {
    getUsers(): Promise<User[]>
}

export {UserDataSourceInterface}

