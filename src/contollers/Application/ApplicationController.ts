import { applicationService } from '../../services/ApplicationService/ApplicationService';
import { logger } from '../../lib/logger';
class ApplicationController {
    // constructor() {

    // }

    /**
     * static getInstance
     */
    public static getInstance() {
        if (!ApplicationController.instance) {
            ApplicationController.instance = new ApplicationController();
        }
        return ApplicationController.instance;
    }
    private static instance: ApplicationController;

    public createApplication = async ({ params, headers, body }: any) => {
        // const { name,email,mobile, tags, imgFile } = body
        console.log("body::", body)
        return await applicationService.createApplication(body);
    }


    public updateApplication = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await applicationService.updateApplication(id, body);

    }

    public deleteApplication = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await applicationService.deleteApplication(id as String);
    }

}

export default ApplicationController.getInstance();