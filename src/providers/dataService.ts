import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from 'firebase';


@Injectable()
export class DataService {

    profileRes: any;

    constructor(public http: Http, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    }

    async saveProfile(user, profile) {
        try {
            await this.db.object('/users/' + user.uid).update({
                name: profile.value.name,
                email: profile.value.email,
                city: profile.value.city,
                phone: profile.value.phone
            });
            this.profileRes = true;
        } catch (error) {
            this.profileRes = false;
        }
        return this.profileRes;
    }

    getUserProfile(user: User) {
        console.log(user);
        return this.db.object(`/users/${user.uid}`).valueChanges();
    }

}
