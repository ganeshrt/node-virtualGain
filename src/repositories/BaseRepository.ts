import { logger } from './../lib/logger';
import { IUserModel } from './../services/UserService/IUserModel';
import mongoose from 'mongoose';
import User from './User/userModel'
interface IstudentModel {
    name: String,
    email: String,
    mobile: number,
    gender: string,
    address: string,
    state: string,
    city: string,
    dob: Date,
};
export class BaseRepository {

    /**
     * insert
     */
    public insert(data: IstudentModel) {
        logger("BaseRepository - insert ", {});
        const user = new User({ ...data });
        return user.save().then(res => {
            return res;
        }).catch(err => {
            console.log("failed to insert.", err);
            return err;
        })

    }

    /**
     * name
     */
    public getOne(email: String, password: String) {
        // const user = new User({ name, password });
        logger("BaseRepository - getOne ", {});

        return User.findOne({ email, password }).then(res => {
            console.log("user exist...!");
            return res;
        }).catch(err => {
            console.log("user not exist..");
            return err;
        })

    }
    public getAll() {
        // const user = new User({ name, password });
        logger("BaseRepository - getAllUsers ", {});

        return User.find().then(res => {
            console.log("user exist...!");
            return res;
        }).catch(err => {
            console.log("user not exist..");
            return err;
        })

    }
}