import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoginResponse } from '../app/models/login-response';

@Injectable()
export class AuthService {

  constructor(public http: Http, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    console.log('Hello AuthServiceProvider Provider');
  }

    async register(account){
        try{
           return<LoginResponse>{
           result: await this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
          };
        } catch(error){
            return<LoginResponse>{
                error: error
            };
        }
    }

    async login(account){
      try{
          return <LoginResponse>{
              result: await this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
          };
      } catch(error){
          return<LoginResponse>{
              error: error
          };
      }
    }

    getAuthenticatedUser(){
        return this.afAuth.authState;
    }

    logout(){
        this.afAuth.authState.subscribe(user => console.log(user));
        this.afAuth.auth.signOut();
        this.afAuth.authState.subscribe(user => console.log(user));
    }

}
