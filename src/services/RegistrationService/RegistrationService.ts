import { RegistrationRepository } from '../../repositories/Registration/registrationRepo';
import { logger } from '../../lib/logger';
import { IRegistrationModel } from './IRegistrationModel';
import jwt from 'jsonwebtoken'
require('dotenv').config()
export class RegistrationService implements IRegistrationModel {
    private registrationRepo = new RegistrationRepository();

    public static getInstance() {
        if (!RegistrationService.instance) {
            RegistrationService.instance = new RegistrationService();
        }
        return RegistrationService.instance;
    }
    private static instance: RegistrationService;

    public createRegistration = async (
        data: any): Promise<any> => {


        logger("Registration service - create :::::", JSON.stringify({ ...data }));
        return this.registrationRepo.insert(data);

    }

    /**
     * getUserrole
     */
    public getAllRegistration = async (): Promise<any> => {
        let registrations: any;
        logger("registration Service -get all::::: ", {});
        try {

            registrations = await this.registrationRepo.getAll();
            // throw new Error({ message: 'email or password incorrect', status: 404 } as any);

        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
        return registrations;
    }

    public updateRegistration = async (id: String, data: any): Promise<any> => {

        logger("Registration Service Update Registration::::: ",);
        try {
            const registration: any = await this.registrationRepo.update(id, data);
            if (registration) {
                // Generate an access token
                return ({
                    data: registration
                });
            } else {
                throw new Error({ message: 'Registration not found', status: 404 } as any);
            }
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
    }

    public deleteRegistration = async (id: String): Promise<any> => {
        try {
            return await this.registrationRepo.deleteOne(id);
            // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
    }


}
export const registrationService = RegistrationService.getInstance()