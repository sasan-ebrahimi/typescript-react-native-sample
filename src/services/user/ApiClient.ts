export type User = {
    readonly name: string, readonly age: number,
}

export class ApiClient {
    private static readonly users: User[] = [
        {
            name: "Alex",
            age: 33
        },
        {
            name: "Peter",
            age: 21
        },
        {
            name: "Frank",
            age: 22
        },
    ];

    static async fetchUsers(): Promise<User[]> {
        // UNCOMMENT TO TEST ERROR HANDLING
        /*let random = Math.floor((Math.random() * 2000) + 1);
        if (random % 3 == 0)
            return Promise.reject("Some Error in Api")
        else*/
        return Promise.resolve(ApiClient.users);
    }
}
