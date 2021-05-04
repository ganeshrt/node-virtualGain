import { logger } from '../../lib/logger';
import mongoose from 'mongoose';
import Registration from './registrationModel'
export class RegistrationRepository {

    /**
     * insert
     */
    public insert(data: any) {
        logger("BaseRepository - insert ", {});
        const registration = new Registration({ ...data });
        return registration.save().then((res: any) => {
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
        // const Registration = new Registration({ name, password });
        logger("BaseRepository - getOne ", {});

        return Registration.remove({ _id: id }).then(res => {
            console.log("Registration exist...!");
            return res;
        }).catch(err => {
            console.log("Registration not exist..");
            return err;
        })

    }
    public getAll() {
        // const Registration = new Registration({ name, password });
        logger("BaseRepository - getAllRegistrations ", {});
        return Registration.find({}).then(res => {
            console.log("Registration exist...!", res);

            return res;
        }).catch(err => {
            console.log("Registration not exist..");
            return err;
        })
    }

    public update(id: String, obj: any) {
        // const Registration = new Registration({ name, password });
        logger("BaseRepository - getAllRegistrations ", {});
        return Registration.updateOne({ _id: id }, { ...obj }).then(res => {
            console.log("Registration exist...!");
            return res;
        }).catch(err => {
            console.log("Registration not exist..");
            return err;
        })
    }

}