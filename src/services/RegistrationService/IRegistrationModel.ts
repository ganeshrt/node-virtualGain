export interface IRegistrationModel {
    createRegistration(
        name: String,
        email: String,
        mobile: number,
        gender: string,
        address: string,
        state: string,
        city: string,
        dob: Date,
    ): Promise<any>;
}