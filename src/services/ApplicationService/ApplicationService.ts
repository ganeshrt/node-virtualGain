import { ApplicationRepository } from '../../repositories/application/applicationRepo';
import { logger } from '../../lib/logger';
import { IApplicationModel } from './IApplicationModel';
import jwt from 'jsonwebtoken'
require('dotenv').config()
export class ApplicationService implements IApplicationModel {
    private applicationRepo = new ApplicationRepository();

    public static getInstance() {
        if (!ApplicationService.instance) {
            ApplicationService.instance = new ApplicationService();
        }
        return ApplicationService.instance;
    }
    private static instance: ApplicationService;

    public createApplication = async (
        data: any): Promise<any> => {


        logger("Application service - create :::::", JSON.stringify({ ...data }));
        return this.applicationRepo.insert(data);

    }

    /**
     * getUserrole
     */
    public getAllApplication = async (): Promise<any> => {
        let applications: any;
        logger("application Service -get all::::: ", {});
        try {

            applications = await this.applicationRepo.getAll();
            // throw new Error({ message: 'email or password incorrect', status: 404 } as any);

        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
        return applications;
    }

    public updateApplication = async (id: String, data: any): Promise<any> => {

        logger("Application Service Update Application::::: ",);
        try {
            const application: any = await this.applicationRepo.update(id, data);
            if (application) {
                // Generate an access token
                return ({
                    data: application
                });
            } else {
                throw new Error({ message: 'Application not found', status: 404 } as any);
            }
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
    }

    public deleteApplication = async (id: String): Promise<any> => {
        try {
            return await this.applicationRepo.deleteOne(id);
            // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
    }


}
export const applicationService = ApplicationService.getInstance()