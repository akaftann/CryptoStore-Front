import $api from '../http/index.js'

export default class AuthService{
    static async signIn(email, pass){
        return $api.post('/login', {email, pass})
    }

    static async signUp(email, pass){
        return $api.post('/registration', {email, pass})
    }

    static async signOut(){
        return $api.post('/logout')
    }
}