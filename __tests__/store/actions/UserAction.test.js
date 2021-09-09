import {LocalUserDataSource} from "../../../src/repo/storage/user/LocalUserDataSource";
import {getUsers} from "../../../src/repo/store/actions";
import configureMockStore from 'redux-mock-store';
import {CloudUserDataSource} from "../../../src/services/user/CloudUserDataSource";
import thunk from 'redux-thunk';
import {GET_USERS} from "../../../src/repo/store/actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockedCloudUserList = [{name: "CLOUD USER", age: 22}]
const mockedLocalUserList = [{name: "LOCAL USER", age: 33}]
let store;

beforeEach(() => {
    store = mockStore({})
    CloudUserDataSource.prototype.getUsers = jest.fn().mockImplementation(async () =>
        Promise.resolve(mockedCloudUserList)
    );
    LocalUserDataSource.prototype.getUsers = jest.fn().mockImplementation(async () =>
        Promise.resolve(mockedLocalUserList)
    );
})

test('Fires getUsers request for api data', async () => {

        LocalUserDataSource.prototype.shouldUseCache = jest.fn().mockImplementation(async () =>
            Promise.resolve(false)
        );
        await store.dispatch(getUsers())
            .then(()=>{
                let fetchedUsers = extractActionFromStore(store)
                expect(fetchedUsers).toHaveLength(1)
                fetchedUsers = fetchedUsers[0].payload.usersList
                expect(fetchedUsers).toBe(mockedCloudUserList)
            })
    }
);
test('Fires getUsers request for local data', async () => {
        LocalUserDataSource.prototype.shouldUseCache = jest.fn().mockImplementation(async () =>
            Promise.resolve(true)
        );
        await store.dispatch(getUsers())
            .then(()=>{
                let fetchedUsers = extractActionFromStore(store)
                expect(fetchedUsers).toHaveLength(1)
                fetchedUsers = fetchedUsers[0].payload.usersList
                expect(fetchedUsers).toBe(mockedLocalUserList)
            })
    }
);

function extractActionFromStore(store) {
    return store.getActions().filter((action) => {
        return action.type == GET_USERS.SUCCESS
    })
}
