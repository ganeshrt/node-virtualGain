export interface IUserModel {
    createUser(name: String,
        email: String,
        password: String,
        mobile: number,
        gender: string,
        address: string,
        state: string,
        city: string,
        dob: Date,
    ): Promise<any>;
}