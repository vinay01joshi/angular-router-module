import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isLoggedIn = false;

    login(username,password){
        this.isLoggedIn = true;
    }

    logOut(){
        this.isLoggedIn = false;
    }
}