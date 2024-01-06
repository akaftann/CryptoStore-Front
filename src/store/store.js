import {makeAutoObservable} from 'mobx'
import AuthService from '../services/AuthService.js'

export default class Store{
    user = {}
    isAuth = false
    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool){
        this.isAuth = bool
    }

    setUser(user){
        this.user = user
    }

    async signIn(email, pass){
        try{
            console.log('start sign in...')
            const responce = await AuthService.signIn(email, pass)
            console.log(responce)
            localStorage.setItem('token', responce.data.accessToken)
            this.setAuth(true)
            this.setUser(responce.data.user)
        }catch(e){
            console.log('error...', e.responce?.data?.message)
        }
    }

    async signUp(email, pass){
        try{
            const responce = await AuthService.signUp(email, pass)
            console.log(responce)
            localStorage.setItem('token', responce.data.accessToken)
            this.setAuth(true)
            this.setUser(responce.data.user)
        }catch(e){
            console.log(e.responce?.data?.message)
        }
    }

    async signOut(){
        try{
            const responce = await AuthService.signOut()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        }catch(e){
            console.log(e.responce?.data?.message)
        }
    }
}

