import { registrationService } from '../../services/RegistrationService/RegistrationService';
import { logger } from '../../lib/logger';
class RegistrationController {
    // constructor() {

    // }

    /**
     * static getInstance
     */
    public static getInstance() {
        if (!RegistrationController.instance) {
            RegistrationController.instance = new RegistrationController();
        }
        return RegistrationController.instance;
    }
    private static instance: RegistrationController;

    public createRegistration = async ({ params, headers, body }: any) => {
        // const { name,email,mobile, tags, imgFile } = body
        console.log("body::", body)
        return await registrationService.createRegistration(body);
    }


    public updateRegistration = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await registrationService.updateRegistration(id, body);

    }

    public deleteRegistration = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await registrationService.deleteRegistration(id as String);
    }

}

export default RegistrationController.getInstance();