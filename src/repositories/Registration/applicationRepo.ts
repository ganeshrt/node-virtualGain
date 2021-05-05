import { logger } from '../../lib/logger';
import mongoose from 'mongoose';
import Application from './applicationModel'
export class ApplicationRepository {

    /**
     * insert
     */
    public insert(data: any) {
        logger("BaseRepository - insert ", {});
        const application = new Application({ ...data });
        return application.save().then((res: any) => {
            return res;
        }).catch((err: any) => {
            console.log("failed to insert.", err);
            return err;
        })

    }

    /**
     * name
     */
    public deleteOne(id: String) {
        // const Application = new Application({ name, password });
        logger("BaseRepository - getOne ", {});

        return Application.remove({ _id: id }).then(res => {
            console.log("Application exist...!");
            return res;
        }).catch(err => {
            console.log("Application not exist..");
            return err;
        })

    }
    public getAll() {
        // const Application = new Application({ name, password });
        logger("BaseRepository - getAllApplications ", {});
        return Application.find({}).then(res => {
            console.log("Application exist...!", res);

            return res;
        }).catch(err => {
            console.log("Application not exist..");
            return err;
        })
    }

    public update(id: String, obj: any) {
        // const Application = new Application({ name, password });
        logger("BaseRepository - getAllApplications ", {});
        return Application.updateOne({ _id: id }, { ...obj }).then(res => {
            console.log("Application exist...!");
            return res;
        }).catch(err => {
            console.log("Application not exist..");
            return err;
        })
    }

}